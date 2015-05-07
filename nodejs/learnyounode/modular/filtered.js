var modular = require("./modular");
modular(process.argv[2], process.argv[3], function(err, result) {
    if (err) {
        throw (err);
    }
    result.forEach(function(item) {
        console.log(item);
    });
});
