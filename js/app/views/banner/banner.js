var Banner = Backbone.View.extend({
  className: "banner",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You now have a banner");
  }
});
