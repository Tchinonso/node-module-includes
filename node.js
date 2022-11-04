// To include the file system module, use the require() method.
// one of the commonly used file system include is the Read Files
// The fs.readFile() method is used to read files on your computer
//write a simple html document and save in the same directory as nodejs file
// then create a nodejs file that reads the html content and return the content

var http = require('http');
var fs = require('fs');
const { Http2ServerRequest } = require('http2');

Http.createServer(function (req, res) {
	fs.readFile('index.html', function (err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		res.end();
	});
}).listen(8080);