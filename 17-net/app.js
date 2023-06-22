const net   = require('net');
const server = net.createServer();
server.listen(3000, '127.0.0.1',511, ()=>{
    console.log('server opened on %s port %s', server.address().address, server.address().port);
} );

server.on('connection', (socket)=>{
    console.log('Connected!');
    // socket.write(`hello `+socket.remoteAddress+' port '+socket.remotePort);
    socket.on('data', (output)=>{
        console.log('output: ', output.toString());
    });

    process.stdin.on('data', (input)=>{
        socket.write('input: '+ input.toString());
    });

    //when client disconnects
    socket.on('end', ()=>{console.log('client is disconnected!')});

    //when client run into error
    socket.on('error', (err)=>{console.log(err.message)});
});