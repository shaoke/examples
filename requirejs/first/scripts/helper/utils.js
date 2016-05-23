define([], function() {

  console.group("Initial utils module");
  var utils = {};

  utils.sayHello = function(){
    console.log("Hello World!");
    alert("Hello World!");
  }

  console.groupEnd();
  return utils;
});
