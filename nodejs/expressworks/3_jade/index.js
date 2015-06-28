var express = require('express');
var app = express();
var port = process.argv[2];

app.set("views", "./views");
app.set("view engine", "jade");

app.get('/', function(req, res){
    res.send("Jade Example");
});

app.get('/home', function(req, res){
    res.render("index", {date: new Date().getTime()});
});

var server = app.listen(port, function(){
    console.log('Server started! %s:%d', server.address().address, server.address().port);
});

