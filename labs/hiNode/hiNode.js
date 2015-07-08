var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
        console.log("request received " + req);
        res.write("hello Node");
        res.end();
      });

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});