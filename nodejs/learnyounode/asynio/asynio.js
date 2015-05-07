var fs = require("fs");

fs.readFile(process.argv[2], function(err, data){
	if(err){
		throw(err);
	}

	var string = data.toString();

	var arr = string.match(/\n/ig);
	console.log(arr.length);

});

