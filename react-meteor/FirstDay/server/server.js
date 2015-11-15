Meteor.startup(function () {
    // code to run on server at startup
    var Rooms = new Mongo.Collection("rooms");
    Rooms.insert({name: "Conference Room A"});
});

