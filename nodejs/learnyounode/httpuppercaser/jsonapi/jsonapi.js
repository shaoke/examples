var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){

    var newURL = url.parse(req.url);
    var date = new Date(newURL.query.substr(4)), data;

    if(newURL.pathname == '/api/parsetime'){
        data = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    }else if(newURL.pathname == '/api/unixtime'){
        data = {
            "unixtime": date.getTime()
        };
    }

    res.writeHead(200, { 'Content-Type': 'application/json'   });
    res.write(JSON.stringify(data));

    res.end();
});

server.listen(port, function(){

});
