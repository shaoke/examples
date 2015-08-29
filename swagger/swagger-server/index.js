var path = require('path');
var swaggerServer = require('swagger-server');
var server = swaggerServer(path.join(__dirname, 'petstore.yaml'));

// Start listening on port 8000 
// app.listen(8000, function() {
//   console.log('Your REST API is now running at http://localhost:8000');
// });

// This an Express error-handler middleware (notice the extra "err" parameter).
// It will only be called if an error occurs.  See http://expressjs.com/guide/error-handling.html
server.use(function(err, req, res, next) {
  // Return all errors as a custom "errorModel" object
  var errorModel = {
    code: err.status || 500,
    message: err.message || 'Unknown Error'
  };

  res.status(errorModel.code).json(errorModel);
});

server.start();