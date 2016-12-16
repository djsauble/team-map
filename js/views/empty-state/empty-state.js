var EmptyState = Backbone.View.extend({
  className: "empty-state",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("<span>No people found. <a href='#'>Add one?</a></span>");
  }
});
