import os
from flask import Flask
from api.modules.NitrateCancer import NitrateCancer
from api.modules.JohnBallZoo import JohnBallZoo
app = Flask(__name__, static_folder='./../build', static_url_path='/')
# app = Flask(__name__, static_folder='./../build')
# app = Flask(__name__, static_folder='static')
app.secret_key = os.environ['SECRET']
app.debug = True

# from api import routes

@app.route("/")
def root(): return app.send_static_file('index.html')

app.register_blueprint(NitrateCancer.blueprint, url_prefix='/nitrate-cancer')
app.register_blueprint(JohnBallZoo.blueprint, url_prefix='/john-ball-zoo')
