import flask
import os
import requests

app = flask.Flask(__name__)
@app.route('/nextimage')
def next():
    curr = requests.get()


app.run()
