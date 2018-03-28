from flask import Flask, render_template
import threading
from websockets import websock_start_server

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
# socketio = SocketIO(app)
from views import index

t = threading.Thread(target=websock_start_server)
t.start()