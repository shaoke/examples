'use strict';

var LEX = require('letsencrypt-express').testing();

var DOMAIN = 'example.shaoke.me';
var EMAIL = 'shaokexu@gmail.com';

var lex = LEX.create({
  configDir: require('os').homedir()+'/.letsencrypt/etc',
  approveRegistration: function(hostname, approve){
    if(hostname == DOMAIN){
      approve(null, {
        domains: [DOMAIN],
        email: EMAIL,
        agreeTos: true
      });
    }
  }
});


var express = require('express');
var app = express();

app.use(express.static('public'));

/*
app.use(function(req, res){
  res.send({
    success: true
  });
});
*/
lex.onRequest = app;

lex.listen([9001], [5001], function(){
  var protocol = ('requestCert' in this) ? 'https' : 'http';
  console.log("Listening at " + protocol + '://localhost:' + this.address().port);
})
