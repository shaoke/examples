var http = require('http');

var url = process.argv[2];
var regStr = /([^:]+):\/\/([^:]+):([^:]+)/g;
var result = regStr.exec(url);
var host = result[2];
var port = result[3];

var options = {
    host: host,
    port: port,
    method: 'GET'
};

var dataArr = [];

var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
        dataArr.push(data);
    });

    res.on('end', function(){
        var str = dataArr.join("");
        console.log(str.length);
        console.log(str);
    });

});

req.end();

