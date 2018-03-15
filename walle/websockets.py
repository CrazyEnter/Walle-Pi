from flask_socketio import send, emit
from app import socketio
from flask import request


@socketio.on('connect')
def handle_client_connect(*data):
    client_id = request.sid
    print('New client {} is connecting...'.format(client_id))


@socketio.on('client_connected')
def handle_client_connect_event(json):
    print('received json: {0}'.format(str(json)))


@socketio.on('disconnect')
def handle_client_disconnect(*data):
    print('Client is disconnecting...')


@socketio.on('steering_wheel')
def handle_message(*message):
    print('handler is: alert', message)


@socketio.on('heartbeat')
def handle_json(data):
    print('heartbeating from frontend:', data)
    emit('heartbeat', '--> heartbeating: pong...')
