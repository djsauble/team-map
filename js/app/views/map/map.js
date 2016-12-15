var Map = Backbone.View.extend({
  className: "map",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You have a map!");
  }
});
