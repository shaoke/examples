var hostName = "http://sandbox.evernote.com";
var options,oauth;
options = {
    consumerKey: "supereditor",
    consumerSecret: "4ea7d659f1e7ca39",
    callbackUrl : "index.html",
    signatureMethod : "HMAC-SHA1",
};
// oauth = OAuth(options);
// oauth.request({'method': 'GET', 'url': hostName + '/oauth', 'success': success, 'failure': failure});

var url = "https://sandbox.evernote.com/oauth?oauth_callback=http://localhost:3000&oauth_consumer_key="+options.consumerKey+"&oauth_nonce=3166905818410889691&oauth_signature=T0+xCYjTiyz7GZiElg1uQaHGQ6I=&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1429565574&oauth_version=1.0";

$.ajax(url)
  .done(function(){
    console.log(arguments);
  })
  .fail(function(){
    console.error(arguments);
  });

/*https://sandbox.evernote.com/oauth?oauth_callback=http://www.foo.com&oauth_consumer_key=sample-api-key-4121&oauth_nonce=3166905818410889691&oauth_signature=T0+xCYjTiyz7GZiElg1uQaHGQ6I=&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1429565574&oauth_version=1.0*/
