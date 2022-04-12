import os

from flask import Blueprint

blueprint = Blueprint('JohnBallZoo', __name__,
    static_folder='./../../../build')

@blueprint.route('/')
def john_ball_zoo(): 
    print('returning index!')
    print('database', os.environ.get('DATABASE_URL'))
    return blueprint.send_static_file('index.html')

@blueprint.route('/set-rating', methods=['POST'])
def set_rating():
    print('database', os.environ.get('DATABASE_URL'))
