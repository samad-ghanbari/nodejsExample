const net   = require('net');
const server = net.createServer();
server.listen(3000, '127.0.0.1',511, ()=>{
    console.log('server opened on %s port %s', server.address().address, server.address().port);
} );

let clients = [];

server.on('connection', (socket)=>{
    console.log('Connected!');
    socket.id = null;
    clients.push(socket);
    socket.on('data', (output)=>{
        for(let i in clients)
        {
            if(clients[i].remoteport === socket.remotePort ) continue;    
            clients[i].write(output.toString());
        }    
    });

    process.stdin.on('data', (input)=>{
        socket.write('input: '+ input.toString());
    });

    //when client disconnects
    socket.on('end', ()=>{console.log('client is disconnected!')});

    //when client run into error
    socket.on('error', (err)=>{console.log(err.message)});
});