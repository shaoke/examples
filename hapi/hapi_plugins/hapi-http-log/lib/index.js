

exports.register = function(server, options, next){
  console.log("hapi-http-log");
  //console.log("server.realm: %o", server.realm);

  server.ext("onRequest", function(request, reply) {
    var str = "onReqeust, Time: "+new Date().getTime();
    console.log(str);
    //reply("hapi-http-log, Reject. Time: "+new Date().getTime()).code(404);
    //console.log(reply.response());
    reply("onRequest").code(404);
    reply.continue();
  });

  server.ext("onPreAuth", function(request, reply){
    //request.response.test = "onsssss";
    //console.log("onPreAuth, Time: %s", new Date().getTime());
    console.log("onPreAuth, response: %o", request.response);
    reply.continue();
  });

  server.ext("onPostAuth", function(request, reply){
    console.log("onPostAuth, Time: %s", new Date().getTime());
    var res = reply.continue();
  });

  server.ext("onPreHandler", function(request, reply){
    console.log("onPreHandler, Time: %s", new Date().getTime());
    reply.continue();
  });

  server.ext("onPostHandler", function(request, reply){
    console.log("onPostHandler, Time: %s", new Date().getTime());
    reply.continue();
  });

  server.ext("onPreResponse", function(request, reply){
    console.log("onPreResponse, Time: %s", new Date().getTime());
    reply.continue();
  });

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
