const net = require('net');
const server = net.createServer();
server.listen(3000, '127.0.0.1',511, ()=>{
    console.log('open on ', server.address());
} );

server.on('connection', ()=>{
    console.log('New Connection!');
});