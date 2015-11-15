(function(){

    Meteor.startup(function () {
        console.log("Meteor.startup, time: " + new Date().getTime());
        //React.render(<Components.Hello initCounter={10}></Components.Hello>, document.getElementById("container"));
        React.render(<Components.Products />, document.getElementById("productContainer"));
    });

})();