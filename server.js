var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SerialPort = require("serialport").SerialPort
var portName = '/dev/ttyACM0';
var sp = new SerialPort(portName, {
   baudrate: 9600,
});

// Start server
http.listen(8080, function(){
  console.log('Starting server, listening on *:8080');
});

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
io.on('connection', function (socket) {
  console.log('A user has connected ');

    socket.on('message', function (message) {
	//var updatedData = data.data;	
    console.log(message);
	serialPort.Write(message);
  });
});