import os
from flask import Flask

from api.modules.NitrateCancer import NitrateCancer
from api.modules.JohnBallZoo import JohnBallZoo
from api.modules.ScrollyMap import ScrollyMap
app = Flask(__name__, static_folder='./../build', static_url_path='/')
app.secret_key = os.environ['SECRET']
app.debug = True

@app.route("/")
def root(): return app.send_static_file('index.html')

app.register_blueprint(NitrateCancer.NitrateBlueprint, url_prefix='/nitrate-cancer')
app.register_blueprint(JohnBallZoo.ZooBlueprint, url_prefix='/john-ball-zoo')
app.register_blueprint(ScrollyMap.ScrollyMapBlueprint, url_prefix='/scrolly-map')
