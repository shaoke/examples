var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain'  });
    var rstream = fs.createReadStream(filePath, {encoding:'utf8'});
    rstream.on('open', function(){
        rstream.pipe(res);
    });
});

server.listen(port);
