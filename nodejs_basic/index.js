var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
    fs.ReadStream("./interface.html").pipe(res);
}).listen(8080);

console.log('Server running with port 8080') 