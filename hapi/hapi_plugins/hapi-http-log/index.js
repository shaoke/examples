exports.register = function(server, options, next){
  console.log("hapi-http-log");
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};