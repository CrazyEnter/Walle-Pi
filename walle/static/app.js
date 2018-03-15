console.log = function(text){
    $(".console .text").prepend("<p>" + text + "</p>");
};
var ws = null;
var connect = function(url){
    if (ws !== null)
        return console.log('already connected');

    ws = new WebSocket(url);

    ws.onopen = function () {
        console.log('connected');
    };

    ws.onmessage = function (e) {
        var recv = e.data;
        console.log("ws:"+recv);
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

$("#move-up").on("touchstart",function(){
    if(ws == null)
        return false;
    ws.send("up");
});
$("#move-up").on("touchend",function(){
    if(ws == null)
        return false;
    ws.send("stop");
});
$("#move-right").on("touchstart",function(){
    if(ws == null)
        return false;
    ws.send("right");
});
$("#move-right").on("touchend",function(){
    if(ws == null)
        return false;
    ws.send("right");
});
$("#move-left").on("touchstart",function(){
    if(ws == null)
        return false;
    ws.send("left");
});
$("#move-left").on("touchend",function(){
    if(ws == null)
        return false;
    ws.send("left");
});
$("#move-down").on("touchstart",function(){
    if(ws == null)
        return false;
    ws.send("down");
});
$("#move-down").on("touchend",function(){
    if(ws == null)
        return false;
    ws.send("down");
});

