import flask
from flask_cors import CORS
import os
from commands import image_requests

APP = flask.Flask(__name__)
CORS(APP)

@APP.route('/next_image', methods=['GET'])
def next_image():
    img_url = flask.request.args.get('url')
    next_url = image_requests.next_image(img_url)
    return {'url': next_url}

@APP.route('/prev_image', methods=['GET'])
def prev_image():
    img_url = flask.request.args.get('url')
    prev_url = image_requests.prev_image(img_url)
    return {'url': prev_url}

APP.run()
