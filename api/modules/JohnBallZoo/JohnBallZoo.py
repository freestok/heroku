import os

import psycopg2

from flask import Blueprint, jsonify, request

ZooBlueprint = Blueprint('JohnBallZoo', __name__,
    static_folder='./../../../build')

@ZooBlueprint.route('/')
def john_ball_zoo():
    print('returning index!')
    print('database', os.environ.get('DATABASE_URL'))
    return ZooBlueprint.send_static_file('index.html')

@ZooBlueprint.route('/test')
def test():
    return {'hi': 'hello'}

@ZooBlueprint.route('/set-rating', methods=['POST'])
def set_rating():
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()


    req = request.json
    print('req', req)
    name = req['name']
    rating = req['rating']
    try:
        sql = f'''INSERT INTO ratings (animalname, rating) 
                    VALUES ('{name}', {rating})'''
        cur.execute(sql)
        conn.commit()
        status='success'
    except Exception as e:
        print(e)
        status='fail'
        pass
    finally:
        cur.close()
        conn.close()

    return {'status': status}


@ZooBlueprint.route('/get-rating', methods=['GET'])
def get_rating():
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()
    name = request.args.get('name')
    avg_rating = None
    total_ratings = None
    all_ratings = None
    try:
        sql = f"""SELECT rating FROM ratings WHERE animalname = '{name}';"""
        cur.execute(sql)
        rows = [i[0] for i in cur.fetchall()]
        print(rows)
        total_ratings = len(rows)
        avg_rating = sum(rows) / total_ratings

        all_ratings = [__format_star(rows, i) for i in [1,2,3,4,5]]
    except Exception as e:
        print(e)
        pass
    finally:
        cur.close()
        conn.close()

    return {'total': total_ratings, 'avg': avg_rating, 'all_ratings': all_ratings}


def __format_star(rows, val):
    if rows:
        percentage = round((rows.count(val) / len(rows)) * 100, 2)
    else:
        percentage = None
    return {'star': val, 'label': percentage}