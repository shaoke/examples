var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3]?'.'+process.argv[3]:process.argv[3];

fs.readdir(dir, function(err, list){
	if(err){
		throw(err);
	}
	//console.log(extension);
	for(var i=0; i<list.length; i++){
		//console.log("file: %s", list[i]);
		//console.log("extension: %s", path.extname(list[i]));
		if(path.extname(list[i])===extension){
			console.log("%s",list[i]);
		}
	}
});
