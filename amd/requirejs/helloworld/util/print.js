// Define a util/print module
define([], function(){
    return {
        log: function(msg){
            var newMsg = this.getMessage(msg);
            console.log(newMsg);
        },
        getMessage: function(msg){
            return "[Info]["+new Date()+"]: "+msg;
        }
    }
});