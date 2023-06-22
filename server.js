const http = require('http');
http.createServer(function(request, response){ response.writeHead(200, 'Content-Type:text/plain'); response.end("This is my fist app"); }).listen(8090);


console.log('server is running...');
