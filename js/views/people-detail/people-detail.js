var PeopleDetail = Backbone.View.extend({
  className: "people-detail",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You have a people-detail panel!");
  }
});
