'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.end();
});

var port = process.env.NODE_PORT || 3000;
var hostname = process.env.NODE_IP || 'localhost';

server.listen(port, hostname, function () {
	console.log('Listening on ' + hostname + ':' + port);
});
