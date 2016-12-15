var Banner = Backbone.View.extend({
  className: "banner",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("See something amiss? Let <a href='mailto:dsauble@sonatype.com'>Daniel Sauble</a> know.");
  }
});
