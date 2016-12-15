var Banner = Backbone.View.extend({
  className: "banner",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("Don't see your information here? Email <a href='mailto:dsauble@sonatype.com'>dsauble@sonatype.com</a>");
  }
});
