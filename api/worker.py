import json
import os
import time
import traceback

import geopandas as gpd
import numpy as np
import pandas as pd
import psycopg2
import statsmodels.api as sm
from affine import Affine
from rasterstats import zonal_stats

from modules.NitrateCancer import idw

def main():
    while True:
        conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')

        cur = conn.cursor()
        try:
            rows = get_idw_data(cur)
            process_rows(conn, cur, rows)
        except Exception as e:
            print('ERROR')
            print(e)
            print(traceback.format_exc())
        finally:
            cur.close()
            conn.close()

        time.sleep(5)

def process_rows(conn, cur, rows):
    for row in rows:
        uid, p, nnear, resolution, stats, results = row
        resolution = int(resolution)

        # meaning, if stats and results were not null, then it has already been
        # processed and can be skipped
        if not any([stats, results]):
            run_analysis(conn, cur, uid, p, nnear, resolution)

def get_idw_data(cur):
    cur.execute('SELECT id, p, nnear, resolution, stats, results FROM idw')
    rows = cur.fetchall()
    return rows

def run_analysis(conn, cur, uid, P, NNEAR, RESOLUTION):
    print('Get gdf from nitrate points...')
    points = os.path.join('static', 'nitrate_wgs84.json')
    # gdf = gpd.read_file(points)

    # get geodata
    cur.execute('SELECT nitrate, cancer FROM idwdata;')
    points, tracts = cur.fetchone()
    points = json.loads(points)
    tracts = json.loads(tracts)

    gdf = gpd.GeoDataFrame.from_features(points)
    gdf['x'] = gdf.geometry.x
    gdf['y'] = gdf.geometry.y
    bounds = gdf.total_bounds
    xy = gdf[['x', 'y']].to_numpy()
    z = gdf.nitr_ran.to_numpy()
    # ask = generate_query_points(gdf, RESOLUTION)

    print('Generate IDW...')
    idw_gen = idw.IDWGenerator(xy, z, bounds)
    ask = idw_gen.generate_query_points(resolution=RESOLUTION)
    interpol = idw_gen.interpolate(ask, nnear=NNEAR, p=P )

    ## get it into a grid, flip it (for some reason it is upside-down)
    print('Convert to numpy grid...')
    final_grid = interpol.reshape((RESOLUTION, RESOLUTION))
    # final_grid = np.transpose(final_grid)
    final_grid = np.flip(final_grid, 0)

    # pure numpy?
    nrows, ncols = np.shape(final_grid) 
    xmin, ymin, xmax, ymax = bounds
    xres = (xmax-xmin)/float(ncols)
    yres = (ymax-ymin)/float(nrows)
    geotransform=(xmin,xres,0,ymax,0, -yres)
    affine = Affine.from_gdal(*geotransform)
    # tracts_file = os.path.join('static', 'cancer_tracts_wgs84.json')
    # tracts = gpd.read_file(tracts_file)
    tracts = gpd.GeoDataFrame.from_features(tracts)
    print('TRACTS SHAPE', tracts.shape)

    print('Zonal stats...')
    stats = zonal_stats(tracts, final_grid, affine=affine, nodata=-999.)
    df = pd.DataFrame(stats)
    print('Merge to final df...')
    final_df = pd.merge(tracts, df, left_index=True, right_index=True)
    print(final_df.shape)
    geom = final_df.geometry
    # regression


    final_df = final_df[['canrate', 'mean', 'GEOID10']].copy()
    final_df = clean_dataset(final_df)
    final_df['geometry'] = geom
    Y = final_df.canrate.values.reshape(-1, 1) # 1 column numpy array
    X = final_df['mean'].values.reshape(-1, 1)

    # statsmodels linear regression
    # https://stackoverflow.com/questions/46304514/access-standardized-residuals-cooks-values-hatvalues-leverage-etc-easily-i
    print('OLS stuff...')
    model = sm.OLS(Y,X)
    results = model.fit()
    influence = results.get_influence()
    results_summary = results.summary()

    results_as_html = results_summary.as_html()

    final_df['fitVal'] = results.fittedvalues
    final_df['residuals'] = results.resid
    final_df['stdResid'] = influence.resid_studentized_internal
    
    to_pass = gpd.GeoDataFrame(final_df).to_json()  
    cur.execute(f"UPDATE idw SET stats = '{results_as_html}' WHERE id = {uid};")
    cur.execute(f"UPDATE idw SET results = '{to_pass}' WHERE id = {uid};")
    conn.commit()

def clean_dataset(df):
    assert isinstance(df, pd.DataFrame), "df needs to be a pd.DataFrame"
    df.dropna(inplace=True)
    indices_to_keep = ~df.isin([np.nan, np.inf, -np.inf]).any(1)
    return df[indices_to_keep].astype(np.float64).copy()

if __name__ == '__main__':
    main()