import os
from flask import Flask
from api.modules.NitrateCancer import NitrateCancer

app = Flask(__name__, static_folder='./../build', static_url_path='/')
# app = Flask(__name__, static_folder='./../build')
# app = Flask(__name__, static_folder='static')
app.secret_key = os.environ['SECRET']
app.debug = True

# from api import routes

app.register_blueprint(NitrateCancer.blueprint, url_prefix='/nitrate-cancer')
