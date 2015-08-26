var http = require('http');
var fs = require('fs');
var m1 = require('./mymodule');

var server = http.createServer(function(req, res) {
        console.log("request received " + req.url);
        res.write("hello Node");
		res.write(m1.message);
		res.write(m1.getMessage());
        res.end();
      });

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});