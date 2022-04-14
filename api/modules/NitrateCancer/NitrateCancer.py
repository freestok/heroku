import json
import os

import psycopg2 

from flask import (
    Blueprint,
    render_template_string,
    request, 
    session
)


NitrateBlueprint = Blueprint('NitrateCancer', __name__,
    static_folder='./../../../build')

@NitrateBlueprint.route('/')
def geog777_proj1(): 
    print('returning index!')
    return NitrateBlueprint.send_static_file('index.html')

@NitrateBlueprint.route('/run', methods=['POST'])
def idw_correlation():
    print('start!!!!!')
    req = request.json
    p           = req['p']                      # power value for IDW
    nnear       = req.get('nnear', 8)           # number of nearest neighbors
    resolution  = req.get('resolution', 250)    # quality of IDW raster

    
    print('connecting...')
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()
    if session.get('uid'):
        session.pop('uid')
    # return {'message': 'loading'}
    try:
        print('execut SQL')
        sql = f'''INSERT INTO idw (nnear, p, resolution) 
                    VALUES ({nnear}, {p}, {resolution})
                    RETURNING id'''
        cur.execute(sql)
        uid = cur.fetchone()[0]
        session['uid'] = uid
        conn.commit()
        pass
    except Exception as e:
        print('ERROR')
        print(e)
    finally:
        cur.close()
        conn.close()

    # gdf = gpd.GeoDataFrame.from_features(points)
    # print(gdf.shape)
    # return jsonify(req)
    
    return {'status': 'loading'}

@NitrateBlueprint.route('/report', methods=['GET'])
def show_report():
    if session.get('results_html'):
        return render_template_string(session['results_html'])
    else:
        return render_template_string('No report available...')

@NitrateBlueprint.route('/check-result', methods=['GET'])
def check_result():
    if session.get('uid'):
        conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
        
        cur = conn.cursor()
        try:
            uid = session['uid']
            cur.execute(f'SELECT stats, results FROM idw WHERE id = {uid};')
            results = cur.fetchall()[0]
            stats, geojson = results
            if all([stats, geojson]):
                session['results_html'] = stats
                js = json.loads(geojson)
                cur.execute(f'DELETE FROM idw WHERE id = {uid};')
                conn.commit()
                cur.close()
                conn.close()
                # return jsonify(geojson)
                return js
            else:
                cur.close()
                conn.close()
                return {'message': 'loading'}
        except Exception as e:
            print('ERROR')
            print(e)
            cur.close()
            conn.close()
            return {'message': 'error'}

        
