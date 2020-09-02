import os
from flask import Flask

app = Flask(__name__, static_folder='static')
app.secret_key = os.environ['SECRET']
app.debug = True

from app import routes