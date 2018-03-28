# -*- coding: utf-8 -*-
from app import app
from flask import render_template


@app.route('/')
def index():
    websocket_url = 'ws://139.196.6.7:5001'
    return render_template('index.html', websocket_url=websocket_url)
