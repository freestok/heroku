import json
import os

import psycopg2 

from flask import (
    Blueprint
)


ScrollyMapBlueprint = Blueprint('ScrollyMap', __name__,
    static_folder='./../../../build')

@ScrollyMapBlueprint.route('/')
def scrolly_home(): 
    return ScrollyMapBlueprint.send_static_file('index.html')
