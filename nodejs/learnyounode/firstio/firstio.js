var fs = require("fs");


var string = fs.readFileSync(process.argv[2]).toString();

var arr = string.match(/\n/ig);

console.log(arr.length);


