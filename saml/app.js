var koa = require('koa');
var SamlStrategy = require('passport-saml').Strategy;
var passport = require('passport');

var app = module.exports = koa();
var router = require('koa-router')();
//
// app.use(function *(){
//   this.body = 'Hello World';
// });

passport.use(new SamlStrategy(
  {
    path: '/login/callback',
    entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
    issuer: 'passport-saml'
  },
  function(profile, done) {
    console.log(profile);
  })
);

router.post('/login/callback',
  passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/login',
  passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  }
);

app.listen(3000);
