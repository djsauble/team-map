var App = Backbone.View.extend({

  initialize: function() {
    // Define filters
    var teamFilter = new Backbone.Model({
      "name": "Team",
      "type": "dropdown",
      "options": [
        "All",
        "IQ",
        "Nexus"
      ],
      "selected": "All"
    });
    var peopleFilter = new Backbone.Model({
      "name": "Name",
      "type": "text",
      "value": ""
    });
    var mapFilter = new Backbone.Model({
      "name": "Map",
      "type": "map",
      "value": null
    });
    var filters = new Backbone.Collection([
      teamFilter,
      peopleFilter,
      mapFilter
    ]);

    // When the filter changes, forward it to the event bus
    filters.on('change', function(m) {
      TeamMapEvents.trigger('filter:change', filters, m);
    });

    // When a request is made to filter by name, update the associated model
    TeamMapEvents.on('filter:name', function(name) {
      peopleFilter.set('value', name);
    });

    // When a request is made to filter by map, update the associated model
    TeamMapEvents.on('filter:map', function(names) {
      mapFilter.set('value', names);
    });

    // Create child views
    this.banner = new Banner();
    this.filterBar = new FilterBar({
      collection: new Backbone.Collection([
        teamFilter,
        peopleFilter
      ])
    });
    this.content = new Content();

    // As soon as the app has been initialized, render it to the DOM
    this.render();
  },

  render: function() {
    this.$el.append(this.filterBar.el);
    this.$el.append(this.content.el);
    this.$el.append(this.banner.el);
  }
});
