import time
from api import app
from flask import send_from_directory

# root, serving our react app
@app.route("/")
def root():
    return app.send_static_file('index.html')

# lets users get to other routes (controlled in the frontend react app)
# @app.route('/')
# @app.route('/<first>')
# @app.route('/<first>/<path:rest>')
# def fallback(first=None, rest=None):
#     return app.send_static_file('index.html')

@app.route("/geog777-proj1")
def geo():
    return app.send_static_file('index.html')
# ----------------------------- back-end routes --------------------------------
@app.route('/api/time')
def api_time():
    return {'time': time.time()}