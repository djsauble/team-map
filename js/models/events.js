var Events = function() {
  var object = {};

  // Enable events
  _.extend(object, Backbone.Events);

  // Event logging
  object.on("map:init", function(maps) {
    //console.log("Maps initialized");
  });
  object.on("filter:change", function(collection, model) {
    //console.log("Filter changed");
  });
  object.on("filter:name", function(name) {
    //console.log("Filter by name");
  });
  object.on("master-detail:state:change", function(state) {
    console.log("Master-detail state change");
  });

  return object;
};
