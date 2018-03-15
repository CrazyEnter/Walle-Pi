var socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function() {
    // we emit a connected message to let knwo the client that we are connected.
    socket.emit('client_connected', {data: 'New client!'});
});

socket.on('message', function (data) {
    console.log('message form backend ' + data);
});

socket.on('heartbeat', function (data) {
    console.log('Heartbeating from backend: ' + data);
});

function heartbeat() {
    socket.emit('heartbeat', '{"message": "heartbeat"}');
}

function steering_wheel() {
    socket.emit('steering_wheel', {data: 'Operating stream from client'});
}
