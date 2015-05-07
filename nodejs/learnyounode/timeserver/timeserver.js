var net = require('net');

var port = process.argv[2];

function zeroFilled(value){
    value = Number(value);
    if(value<10){
        value='0'+value;
    }

    return value;
}

function getDateInfo(){
    var date = new Date();
    var str = date.getFullYear()+'-'+ zeroFilled(date.getMonth()+1) +'-'+ zeroFilled(date.getDate())+" "+zeroFilled(date.getHours())+":"+zeroFilled(date.getMinutes());
    return str;
}

var server = net.createServer(function(socket){
    socket.write(getDateInfo()+"\n");
    socket.end();

    //socket.on('data', function(){
        //socket.write(getDateInfo());
    //});

    //socket.on('end', function(){

    //});

    //socket.end();

});

server.listen(port, function(){
});
