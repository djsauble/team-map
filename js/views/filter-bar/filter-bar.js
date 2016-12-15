var FilterBar = Backbone.View.extend({
  className: "filter-bar",

  initialize: function() {
    // Child views
    this.teamFilter = new FilterDropdown({
      model: new Backbone.Model({
        name: "Team",
        options: [
          "IQ",
          "Nexus"
        ]
      })
    });
    this.locationFilter = new FilterDropdown({
      model: new Backbone.Model({
        name: "Location",
        options: [
          "Toronto, Ontario, Canada",
          "Portland, Oregon, United States",
          "Alexandria, Virginia, United States"
        ]
      })
    });
    this.freeTextFilter = new FilterText({
      model: new Backbone.Model({
        name: "Name"
      })
    });

    this.render();
  },

  render: function() {
    this.$el.append(this.teamFilter.el);
    this.$el.append(this.locationFilter.el);
    this.$el.append(this.freeTextFilter.el);
  }
});
