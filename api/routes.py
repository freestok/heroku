import time
from api import app
from flask import send_from_directory

# root, serving our react app
@app.route("/")
def root():
    # return 'hi'
    return send_from_directory(app.static_folder, 'index.html')
# ----------------------------- back-end routes --------------------------------
@app.route('/api/time')
def api_time():
    return {'time': time.time()}