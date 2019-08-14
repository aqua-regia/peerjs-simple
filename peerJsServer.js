var peerServer = require('peer').PeerServer;
var server = peerServer({port: 9000, path: '/myapp'});

console.log("peerjs-server server started..");

server.on('connection', (client) => { 
    console.log('client connected to server ', client);
 });


 server.on('disconnect', (client) => {
     console.log('client disconnected from server ', client);
 });

//  for using https use the below code
// const fs = require('fs');
// const PeerServer = require('peer').PeerServer;

// const server = PeerServer({
//   port: 9000,
//   ssl: {
//     key: fs.readFileSync('/path/to/your/ssl/key/here.key'),
//     cert: fs.readFileSync('/path/to/your/ssl/certificate/here.crt')
//   }
// });


// running behing proxy server

// const PeerServer = require('peer').PeerServer;
// const server = PeerServer({port: 9000, path: '/myapp', proxied: true});




// signalling server without peerJs

// var http = require('http');
// var port = process.argv[2] || 8000;
// var app = http.createServer();
// app.listen(port, "0.0.0.0");

// var io = require('socket.io')(app);

// io.on('connection', function (socket) {
//   console.log('user connected', socket.id);

//   socket.on('offer', function (data) {
//     console.log('relaying offer');
//     socket.broadcast.emit('offer', data);
//   });

//   socket.on('answer', function(data) {
//     console.log('relaying answer');
//     socket.broadcast.emit('answer', data);
//   });

//   socket.on('candidate', function (data) {
//     console.log('relaying candidate');
//     socket.broadcast.emit('candidate', data);
//   });

//   socket.broadcast.emit('new');
// });

// console.log('+ Running signaling server on 0.0.0.0:' + port);