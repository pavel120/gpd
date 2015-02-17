var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Start server
http.listen(8080, function(){
  console.log('Starting server, listening on *:8080');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// allow commands to be send via http call - GET only accepts command
app.get('/command/', function (req, res) {
  processRobotCommand (req.query.command);
  res.send('command: ' + req.query.command);
  
  // Eventually replace with json so commands can be sent back
  res.json({ 'state': serverStatus.currentAI });
});
  
io.on('connection', function (socket) {
  console.log('A user has connected ');

    socket.on('message', function (message) {
	//var updatedData = data.data;	
    console.log(message);
  });
});