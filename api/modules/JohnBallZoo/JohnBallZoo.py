from flask import Blueprint

blueprint = Blueprint('NitrateCancer', __name__,
    static_folder='./../../../build')

@blueprint.route('/')
def john_ball_zoo(): 
    print('returning index!')
    return blueprint.send_static_file('index.html')

