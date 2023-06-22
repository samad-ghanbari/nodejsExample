const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer( (req, res)=>{

    const urlParsed = url.parse(req.url);
    console.log(urlParsed);
    let html;
    if(urlParsed.pathname === "/")
        html = './index.html';
    else if(urlParsed.pathname === "/about")
        html = "./about.html";

    fs.readFile(html, (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    } );
} ).listen(3000);