var express = require('express');

var app = express();

app.get('/home', function(req, res){
    res.write("Hello World!");
    res.end();
});

app.listen(process.argv[2]);
