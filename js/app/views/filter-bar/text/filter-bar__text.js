var FilterText = Backbone.View.extend({
  className: "filter-bar__text",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You now have a filter textbox");
  }
});
