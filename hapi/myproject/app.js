var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port:3000});

server.route({
      method: 'GET',
      path: '/{name*}',
      handler: function(request, reply){
        console.log('/{name*}');
        reply('Hello, '+decodeURIComponent(request.params.name ? request.params.name : "default name"));
      }
    }
);

server.register([{
  register:require('hapi-http-log'),
  options:{}
}], {}, function(err){
  if(err){
    console.log("Register Plugin Error!");
    return;
  }
  server.start(function(){
    console.log('Server running at: %s', server.info.uri);
  });
});

