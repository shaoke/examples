var http = require('http');

var port = process.argv[2];

var mark = 1;

var server = http.createServer(function(req, res){

    if(req.method!=='POST'){
        res.end("Please send POST Request");
    }
    var dataArr = [];
    req.setEncoding('utf8');
    req.on('data', function(data){
        dataArr.push(data);
    });

    req.on('end', function(){
        var str =  dataArr.join("").toUpperCase();

        res.write(str);

        res.end();
    });


});

server.listen(port, function(){

});
