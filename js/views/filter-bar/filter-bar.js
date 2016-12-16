var FilterBar = Backbone.View.extend({
  className: "filter-bar",

  events: {
    "click button": function() {
      TeamMapEvents.trigger("filter:clear");
    }
  },

  initialize: function() {
    var me = this;

    // Child views
    this.filterViews = [];
    this.collection.forEach(function(m) {
      if (m.get('type') === 'dropdown') {
        me.filterViews.push(new FilterDropdown({
          model: m
        }));
      }
      else {
        me.filterViews.push(new FilterText({
          model: m
        }));
      }
    });

    // Whenever there are active filters, enable the clear filter button
    TeamMapEvents.on("filter:cleared", this.disableClearFilterButton, this);
    TeamMapEvents.on("filter:set", this.enableClearFilterButton, this);

    this.render();
  },

  render: function() {
    var me = this;

    this.filterViews.forEach(function(v) {
      me.$el.append(v.el);
    });

    // Append a Clear Filter button
    this.$el.append("<button disabled>Clear Filters</button>");
  },

  disableClearFilterButton: function() {
    this.$("button").attr("disabled", true);
  },

  enableClearFilterButton: function() {
    this.$("button").attr("disabled", false);
  }
});
