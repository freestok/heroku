import json
from os.path import join

from flask import (
    Blueprint, 
    jsonify, 
    render_template, 
    render_template_string,
    request, 
    Response,
    session
)
import geopandas as gpd
import numpy as np
import pandas as pd
import statsmodels.api as sm
from affine import Affine
from rasterstats import zonal_stats

from api.modules.NitrateCancer import idw
# blueprint = Blueprint('NitrateCancer', __name__)

blueprint = Blueprint('NitrateCancer', __name__,
    static_folder='./../../../build')

@blueprint.route('/')
def geog777_proj1(): 
    print('returning index!')
    return blueprint.send_static_file('index.html')

@blueprint.route('/run', methods=['POST'])
def idw_correlation():
    print('start!!!!!')
    req = request.json
    # print('req', req)
    points      = req['points']                 # nitrate points
    tracts      = req['tracts']                 # census tracts
    p           = req['p']                      # power value for IDW
    nnear       = req.get('nnear', 8)           # number of nearest neighbors
    resolution  = req.get('resolution', 250)    # quality of IDW raster


    # gdf = gpd.GeoDataFrame.from_features(points)
    # print(gdf.shape)
    # return jsonify(req)
    
    result = run_analysis(points, tracts, p, nnear, resolution)
    return jsonify(result)
    # return jsonify({'hi': 'hello'})

@blueprint.route('/report', methods=['GET'])
def show_report():
    if session.get('results_html'):
        return render_template_string(session['results_html'])
    else:
        return render_template_string('No report available...')

@blueprint.route('/download', methods=['POST'])
def download():
    req = request.json
    geojson = req['geojson']
    return Response(geojson, 
            mimetype='application/json',
            headers={'Content-Disposition':'attachment;filename=zones.geojson'})
# -------------------------- LOGIC ---------------------------------------------

def run_analysis(points, tracts, P, NNEAR, RESOLUTION):
    NNEAR = 8  # number of nearest neighbors to look for
    P = 2  # weights ~ 1 / distance**p
    RESOLUTION = 500

    print('Get gdf from nitrate points...')
    gdf = gpd.GeoDataFrame.from_features(points)

    # gdf = gpd.read_file(join('shapefiles', 'well_nitrate.shp'))
    gdf['x'] = gdf.geometry.x
    gdf['y'] = gdf.geometry.y
    # xmin, ymin, xmax, ymax = self.bounds
    bounds = gdf.total_bounds
    # xy = np.array([list(i) for i in list(zip(x, y))])
    # z = np.array(z)
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

    # export to tif
    # raster_file = 'myraster_flip.tif'
    # idw_gen.export_to_tif(final_grid, raster_file)

    # vector_file = join('shapefiles', 'cancer_tracts_wgs84.shp')
    # output_file = join('shapefiles', 'aggregateNitrate.shp')
    # with rasterio.open(raster_file) as src:
    #     affine = src.transform
    #     array = src.read(1)
    # stats = zonal_stats(vector_file, array, affine=(0.011839076599999998, 0.0, -92.8588226,
    #        0.0, -0.00880815964, 46.9032653))
    # idw_gen.calculate_zonal_stats(vector_file, raster_file, output_file)

    # pure numpy?
    nrows, ncols = np.shape(final_grid) 
    xmin, ymin, xmax, ymax = bounds
    xres = (xmax-xmin)/float(ncols)
    yres = (ymax-ymin)/float(nrows)
    geotransform=(xmin,xres,0,ymax,0, -yres)
    affine = Affine.from_gdal(*geotransform)
    tracts = gpd.GeoDataFrame.from_features(tracts)
    # tracts = gpd.read_file(vector_file)
    # gpd.GeoDataFrame.from_features
    # gdf = gpd.GeoDataFrame.from_features(study_area["features"])

    print('Zonal stats...')
    stats = zonal_stats(tracts, final_grid, affine=affine, nodata=-999.)
    df = pd.DataFrame(stats)
    print('Merge to final df...')
    final_df = pd.merge(tracts, df, left_index=True, right_index=True)
    geom = final_df.geometry
    # regression


    print(final_df.columns)
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

    # Note that tables is a list. The table at index 1 is the "core" table. Additionally, read_html puts dfs in a list, so we want index 0
    results_as_html = results_summary.as_html()
    session['results_html'] = results_as_html
    # with open('test.html','w') as f:
    #     f.write(results_summary.as_html())
    # ols_df = pd.read_html(results_as_html, header=0, index_col=0)[0]


    final_df['fitVal'] = results.fittedvalues
    final_df['residuals'] = results.resid
    final_df['stdResid'] = influence.resid_studentized_internal
    # linear regression plot
    # plt.scatter(X, Y)
    # plt.plot(X, y_pred, color='red')

    # residual plot
    # plt.scatter(final_df.residual, y_pred)
    # standardized resiu=dual plot

    # to_pass = final_df.to_json()

    # geojson = {'type': 'FeatureCollection', 'features': []}
    # def test(x: Polygon):
    #     if x.is_valid:
    #         return x
    #     else:
    #         return x.buffer(0)

    # final_df.geometry.apply(lambda x: test(x))
    # geo_df = gpd.GeoDataFrame()
    to_pass = json.loads(gpd.GeoDataFrame(final_df).to_json())  
    # for i, r in final_df.iterrows():
    #     geo_dict = {}
    #     attr_dict = {}
    #     geo_dict['type'] = 'Polygon'

    
    # geo_dict = {}
    # geo_dict["type"] = "Polygon"
    # geo_dict["features"] = [{"type": "Feature", "geometry": a} for a in [geometry.mapping(b) for b in polygon_list]]
    # session['geojson'] = to_pass
    return to_pass


    # plt.show()

    # gpd.GeoDataFrame(final_df).to_file('prediction.shp')

    
def clean_dataset(df):
    assert isinstance(df, pd.DataFrame), "df needs to be a pd.DataFrame"
    df.dropna(inplace=True)
    indices_to_keep = ~df.isin([np.nan, np.inf, -np.inf]).any(1)
    return df[indices_to_keep].astype(np.float64).copy()
