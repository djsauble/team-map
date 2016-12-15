var Events = function() {
  var object = {};

  // Enable events
  _.extend(object, Backbone.Events);

  // Event logging
  object.on("map:init", function(maps) {
    console.log("Maps initialized");
  });

  object.on("filter:change", function(model) {
    console.log("Filter changed");
  });

  return object;
};
