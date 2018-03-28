from websocket_server import WebsocketServer


def websock_start_server():

	def new_client(client, server):
		server.send_message_to_all("THIS IS WALL-E SERVER")

	def recv(client, server, message):
		server.send_message(client, "GET Message_ " + message)

	server = WebsocketServer(5001, host='0.0.0.0', loglevel=10)
	server.set_fn_new_client(new_client)
	server.set_fn_message_received(recv)
	server.run_forever()


if __name__ == '__main__':
	websock_start_server()





# from flask_socketio import send, emit
# from app import socketio
# from flask import request
#
# @socketio.on('connect')
# def handle_client_connect(*data):
#     client_id = request.sid
#     print('New client {} is connecting...'.format(client_id))
#
#
# @socketio.on('client_connected')
# def handle_client_connect_event(json):
#     print('received json: {0}'.format(str(json)))
#
#
# @socketio.on('disconnect')
# def handle_client_disconnect(*data):
#     print('Client is disconnecting...')
#
#
# @socketio.on('steering_wheel')
# def handle_message(*message):
#     print('handler is: alert', message)
#
#
# @socketio.on('heartbeat')
# def handle_json(data):
#     print('heartbeating from frontend:', data)
#     emit('heartbeat', '--> heartbeating: pong...')
