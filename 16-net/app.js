const net   = require('net');
const server = net.createServer();
server.listen(3000, '127.0.0.1',511, ()=>{
    console.log('server opened on %s port %s', server.address().address, server.address().port);
} );

server.on('connection', (socket)=>{
    console.log('New Connection!');
    // socket.write(`hello `+socket.remoteAddress+' port '+socket.remotePort);
    socket.write(
        `HTTP/1.1 200 OK
Date: Sun, 10 Oct 2010 23:26:07 GMT
Server: Apache/2.2.8 (Ubuntu) mod_ssl/2.2.8 OpenSSL/0.9.8g
Last-Modified: Sun, 26 Sep 2010 22:04:35 GMT
ETag: "45b6-834-49130cc1182c0"
Accept-Ranges: bytes
Content-Length: 12
Connection: close
Content-Type: text/html

Hello world!`
        );
});