var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Start server
http.listen(8080, function(){
  console.log('Starting server, listening on *:8080');
});

  
io.on('connection', function (socket) {
  console.log('A user has connected ');

    socket.on('message', function (message) {
	//var updatedData = data.data;	
    console.log(message);
  });
});