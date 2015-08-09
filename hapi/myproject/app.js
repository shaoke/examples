var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port:3000});

server.route({
      method: 'GET',
      path: '/{name*}',
      handler: function(request, reply){
        console.log('/{name*}');
        reply('Hello, '+decodeURIComponent(request.params.name ? request.params.name : "default name")).code(200);
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
    console.log('Server running at: %s, %s', server.info.uri, new Date().getTime());
  });

  //console.log("%o", server);
});

server.after(function(server, next){
  console.log("server.after: %s", new Date().getTime());
  next();
});

