/*jshint eqeqeq:false */
(function (window) {
  'use strict';

  var localStorage = chrome.storage.local;

  /**
   * Creates a new client side storage object and will create an empty
   * collection if no collection already exists.
   *
   * @param {string} name The name of our DB we want to use
   * @param {function} callback Our fake DB uses callbacks because in
   * real life you probably would be making AJAX calls
   */
  function Store(name, callback) {
    var data;
    var dbName;

    callback = callback || function () {};

    dbName = this._dbName = name;

    localStorage.get(this._dbName, function(storage){
      console.log("get _dbName: %s, storage: %o", this._dbName, storage);
      var todos = storage[this._dbName]&&storage[this._dbName].todos;
      if(!todos){   // If cannot find todos, then create one
        var data = {};
        storage[this._dbName] = {
          todos: []
        };
        localStorage.set(storage, function(){
          callback.call(this, []);
        }.bind(this));
      }else{
        callback.call(this, todos);
      }
    }.bind(this));
  }

  /**
   * Finds items based on a query given as a JS object
   *
   * @param {object} query The query to match against (i.e. {foo: 'bar'})
   * @param {function} callback  The callback to fire when the query has
   * completed running
   *
   * @example
   * db.find({foo: 'bar', hello: 'world'}, function (data) {
   *   // data will return any items that have foo: bar and
   *   // hello: world in their properties
   * });
   */
  Store.prototype.find = function (query, callback) {
    if (!callback) {
      return;
    }

    localStorage.get(this._dbName, function(storage){
      var todos = storage[this._dbName]&&storage[this._dbName].todos;
      console.log("find->todos:%o", todos);
      callback.call(this, todos.filter(function (todo) {
        for (var q in query) {
          return query[q] === todo[q];
        }
      }));
    }.bind(this));
  };

  /**
   * Will retrieve all data from the collection
   *
   * @param {function} callback The callback to fire upon retrieving data
   */
  Store.prototype.findAll = function (callback) {
    callback = callback || function () {};
    // callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
    localStorage.get(this._dbName, function(storage){
      var todos = storage[this._dbName]&&storage[this._dbName].todos;
      console.log("findAll->todos:%o", todos);
      callback.call(this, todos);
    }.bind(this));
  };

  /**
   * Will save the given data to the DB. If no item exists it will create a new
   * item, otherwise it'll simply update an existing item's properties
   *
   * @param {number} id An optional param to enter an ID of an item to update
   * @param {object} data The data to save back into the DB
   * @param {function} callback The callback to fire after saving
   */
  Store.prototype.save = function (id, updateData, callback) {
    localStorage.get(this._dbName, function(storage){
      var todos = storage[this._dbName].todos;

      callback = callback || function () {};

      // If an ID was actually given, find the item and update each property
      if (typeof id !== 'object'|| Array.isArray(id)) {
        var ids = [].concat(id);
        ids.forEach(function(id){
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
              for (var x in updateData) {
                todos[i][x] = updateData[x];
              }
            }
          }
        });

        chrome.storage.local.set(storage, function() {
          chrome.storage.local.get(this._dbName, function(storage) {
            callback.call(this, storage[this._dbName].todos);
          }.bind(this));
        }.bind(this));
      } else {
        callback = updateData;

        updateData = id;

        // Generate an ID
        updateData.id = new Date().getTime();

        todos.push(updateData);
        chrome.storage.local.set(storage, function() {
          callback.call(this, [updateData]);
        }.bind(this));
      }
    }.bind(this));
  };

  /**
   * Will remove an item from the Store based on its ID
   *
   * @param {number} id The ID of the item you want to remove
   * @param {function} callback The callback to fire after saving
   */
  Store.prototype.remove = function (id, callback) {

    localStorage.get(this._dbName, function(storage) {
      var todos = storage[this._dbName].todos;

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
          todos.splice(i, 1);
          break;
        }
      }

      localStorage.set(storage, function(){
        callback.call(this. todos);
      });
    }.bind(this));
  };

  /**
   * Will drop all storage and start fresh
   *
   * @param {function} callback The callback to fire after dropping the data
   */
  Store.prototype.drop = function (callback) {
    var storage = {};
    storage[this._dbName] = {
      todos:[]
    };

    localStorage.set(storage, function(){
      callback.call(this,[]);
    }.bind(this));
  };

  // Export to window
  window.app.Store = Store;
})(window);
