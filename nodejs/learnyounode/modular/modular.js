var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
    extension =  extension ? '.' + extension : extension;
    fs.readdir(dir, function(err, list) {
        var result = [];
        if (err) {
            return callback(err);
        } else {
            for (var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) === extension) {
                    result.push(list[i]);
                }
            }
        }
        return callback(err, result);
    });

}
