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