import os
import smtplib
import shutil
import requests
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage

import psycopg2

def send_email(txt):
    user = os.environ['EMAIL'] 
    password = os.environ['EMAIL_PW'] 
    smtpsrv = 'smtp.gmail.com:587'
    smtpserver = smtplib.SMTP(smtpsrv,587)

    smtpserver.ehlo()
    smtpserver.starttls()
    smtpserver.ehlo
    smtpserver.login(user, password)

    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'HEROKU SITE ERROR'
    msg['From'] = user
    msg['To'] = user
    text = txt
    html = f"""\
    <html>
      <head></head>
      <body>{txt}</body>
    </html>
    """
    part1 = MIMEText(text, 'plain')
    part2 = MIMEText(html, 'html')
    msg.attach(part1)
    msg.attach(part2)

    smtpserver.sendmail(user, user, msg.as_string())
    smtpserver.close()

def unpack_filters(filters):
    if isinstance(filters[1][1],list):
        open_close = 'all'
    else:
        if filters[1][2] == True:
            open_close = 'Open'
        elif filters[1][2] == False:
            open_close = 'Closed'

    case_type   = None
    case_status = None

    if len(filters) == 3:
        case_type = filters[2][2]
    elif len(filters) == 4:
        case_type = filters[2][2]
        case_status = filters[3][2]

    return [open_close, case_type, case_status]

def insert_report(vals):
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()
    try:
        insert_query = '''INSERT INTO reports
            (uid,report_type,lng,lat,zoom,filters,bbox,completed,created_dt)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
        '''
        cur.execute(insert_query,vals)
        conn.commit()
    except Exception as e:
        print('Error inserting report parameters')
        print(e)
    finally:
        cur.close()
        conn.close()

def get_by_uid(uid):
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()
    try:
        query = "SELECT completed, report_type, report_file FROM reports WHERE uid = '{}'".format(uid)
        cur.execute(query)
        return cur.fetchall()
    except Exception as e:
        print('Error inserting report parameters')
        print(e)
    finally:
        cur.close()
        conn.close()

def delete_data(uid):
    conn = psycopg2.connect(os.environ['DATABASE_URL'],sslmode='require')
    cur = conn.cursor()
    
    try:
        cur.execute('UPDATE reports SET downloaded_dt = %s WHERE uid = %s;',(datetime.now(),uid))
        conn.commit()
    except Exception as e:
        print('Error deleting report row')
        print(e)
    finally:
        cur.close()
        conn.close()