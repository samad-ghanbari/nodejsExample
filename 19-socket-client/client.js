const net = require("net");
const socket = new net.Socket();
socket.connect(3000,'localhost', ()=>{
    console.log("socket was connected! from "+ socket.localAddress + ' port: '+ socket.localPort);
});

socket.on('data', (output)=>{
    console.log(output.toString());
});

process.stdin.on('data', (input)=>{
    socket.write(input.toString());
});