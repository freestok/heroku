import ast
import json
import os
import psycopg2
import requests
import sys
import traceback
from datetime import datetime
from io import BytesIO, StringIO

from flask import render_template, request, jsonify, session, url_for
from flask import send_file, make_response

from app import app
from app.utilities import send_email
from app.utilities import unpack_filters
from app.utilities import insert_report 
from app.utilities import get_by_uid
from app.utilities import delete_data


@app.route('/',methods=['GET'])
@app.route('/compliance',methods=['GET'])
def compliance():
    try:
        pth = os.path.join('app','static','choices.json')
        with open(pth) as f:
            choices = json.load(f)

        # response = requests.get('https://grviolations.s3.us-east-2.amazonaws.com/choices.json')
        # choices = json.loads(response.text)
        session['choices'] = choices
        case_types = list(choices.keys())
        case_types.sort()
        return render_template('compliance.html', case_types=case_types, choices=choices)
    except Exception as e:
        print(e)
        send_email(traceback.format_exc())
        return render_template('error.html',ename=sys.exc_info()[0],
                               edesc=sys.exc_info()[1])

# ------------------------ return functions ------------------------------
@app.route('/choices_data/<choice>', methods=['GET','POST'])
def choices_data(choice):
    choices = session.get('choices')
    statuses = choices.get(choice)
    print(statuses)
    return jsonify(statuses)

@app.route('/view-docx', methods=['POST'])
def save_record():
    # get JSON and unpack
    req = request.json

    lng     = req['lng']
    lat     = req['lat']
    zoom    = req['zoom']
    filters = req['filters']
    bbox    = req['bbox']
    uid     = req['uid']
    print(filters)
    print(bbox)
    print(lng, lat)
    print(zoom)
    unpacked_filters = unpack_filters(filters)
    bbox_coords = list(bbox['_sw'].values()) + list(bbox['_ne'].values())
    
    insert_values = (uid,'docx',lng,lat,zoom,unpacked_filters,bbox_coords,False,datetime.now())

    insert_report(insert_values)

    return 'Report request made'

@app.route('/delete-report', methods=['POST'])
def delete_report():
    req = request.json
    uid = req['uid']
    delete_data(uid)
    return 'Record Deleted'

@app.route('/check-status', methods=['POST'])
def get_values():
    req = request.json
    uid = req['uid']
    print(uid)
    result = get_by_uid(uid)
    if result:
        if result[0][0]:
            ready = 'Ready'
        else:
            ready = 'Not Ready'
    else:
        ready = 'Not Ready'

    print(ready)

    return jsonify(ready=ready)

@app.route('/download-file/<uid>')
def downloadFile(uid):
    try:
        print('----------------------')
        print(uid)
        result = get_by_uid(uid)
        print(result)
        print('--------------------')
        report_file = result[0][2]
        byte = report_file.tobytes()
        f = BytesIO(byte)
        f.seek(0)
        return send_file(f,as_attachment=True,attachment_filename='report.docx')
    except Exception as e:
        print(e)
        send_email(traceback.format_exc())
        return render_template('error.html',ename=sys.exc_info()[0],
                               edesc=sys.exc_info()[1])
