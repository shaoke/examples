var express = require('express');
var app = express();
var port = 8001;

app.set("views", "./views");
app.set("view engine", "jade");
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.send("Jade Example");
});

app.get('/home', function(req, res){
    res.render("index", {date: new Date().getTime()});
});

app.get('/whoami', function(req, res){
    // res.send("You are best!");
    res.redirect(301, '/maintain.html');
})

var server = app.listen(port, function(){
    console.log('Server started! %s:%d', server.address().address, server.address().port);
});
