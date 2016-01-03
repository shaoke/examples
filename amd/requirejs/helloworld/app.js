requirejs(['util/print'], function(print){
    var msg = "Hello World! My first RequireJS project. ^_^";
    var newMsg = print.getMessage(msg);
    var p = document.createElement("p");
    p.innerHTML = newMsg;
    document.getElementsByTagName('body')[0].appendChild(p);
    print.log(msg);
});