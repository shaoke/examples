var modular = require("./modular");
var test = require('./test');
var test1 = require('./test1');

console.log("%s", test.serverConfig.BASE_URL);
console.log("%s", test1.serverConfig.LOGIN_URL1);
LOGIN_URL1
// modular(process.argv[2], process.argv[3], function(err, result) {
//     if (err) {
//         throw (err);
//     }
//     result.forEach(function(item) {
//         console.log(item);
//     });
// });
