console.log = function(text){
    $(".console .text").prepend("<p>" + text + "</p>");
};
var ws = null;
var connect = function(url){
    if (ws !== null)
        return console.log('already connected');

    ws = new WebSocket(url);

    ws.onopen = function () {
        console.log('websocket connected');
    };

    ws.onmessage = function (e) {
        var recv = e.data;
        console.log("From Server: "+recv);
    }

    ws.onerror = function (error) {
        ws = null;
        console.log('onerror:'+JSON.stringify(error));
    };

    ws.onclose = function (e) {
        ws = null;
        console.log('websocket closed');
    };
};
$(document).ready(function(){
	$('#move-up').on("touchstart",function(event){
		event.preventDefault(); 
		console.log('up')
		if(ws == null)
			return false;
		ws.send("up");
	});
	$('#move-up').on("touchend",function(event){
		event.preventDefault();
		console.log('up_end')
		if(ws == null)
			return false;
		ws.send("up_end");
	});
	$('#move-down').on("touchstart",function(event){
		event.preventDefault();
		console.log('down')
		if(ws == null)
			return false;
		ws.send("down");
	});
	$('#move-down').on("touchend",function(event){
		event.preventDefault();
		console.log('down_end')
		if(ws == null)
			return false;
		ws.send("down_end");
	});
	$('#move-left').on("touchstart",function(event){
		event.preventDefault();
		console.log('left')
		if(ws == null)
			return false;
		ws.send("left");
	});
	$('#move-left').on("touchend",function(event){
		event.preventDefault();
		console.log('left_end')
		if(ws == null)
			return false;
		ws.send("left_end");
	});
	$('#move-right').on("touchstart",function(event){
		event.preventDefault();
		console.log('right')
		if(ws == null)
			return false;
		ws.send("right");
	});
	$('#move-right').on("touchend",function(event){
		event.preventDefault();
		console.log('down_right')
		if(ws == null)
			return false;
		ws.send("down_right");
	});

})
