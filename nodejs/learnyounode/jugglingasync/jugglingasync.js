var http = require("http");

var result = [], mark = 0;

for(var i = 2; i<5; i++){
    (function(i, result){
        http.get(process.argv[i], function(res){
            res.setEncoding('utf8');
            var dataArr = [];
            res.on('data', function(data){
                dataArr.push(data);
            });

            res.on('end',function(){
                result[i-2] = dataArr.join("");
                mark++;
                if(mark==3){
                    result.forEach(function(item){
                        console.log(item);
                    });
                }
            });
        });
    })(i, result);
}

