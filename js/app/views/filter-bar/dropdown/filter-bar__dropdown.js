var FilterDropdown = Backbone.View.extend({
  className: "filter-bar__dropdown",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You now have a filter dropdown");
  }
});
