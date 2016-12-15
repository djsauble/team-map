var PeopleItem = Backbone.View.extend({
  className: "people-list__item",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("You have " + this.model.get('name') + " in your list!");
  }
});
