import time
from api import app
from flask import send_from_directory
# from api.modules.NitrateCancer import NitrateCancer

# routes have to match the front end, no idea why or how to avoid
# root, serving our react app
@app.route("/")
def root(): return app.send_static_file('index.html')

# @app.route("/geog777-proj1")
# def geog777_proj1(): return app.send_static_file('index.html')
# app.register_blueprint(NitrateCancer.blueprint, url_prefix='/geog777-proj1')
# ----------------------------- back-end routes --------------------------------
@app.route('/api/time')
def api_time():
    return {'time': time.time()}