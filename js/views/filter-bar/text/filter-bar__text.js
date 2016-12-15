var FilterText = Backbone.View.extend({
  className: "filter-bar__text",

  initialize: function() {
    this.render();
  },

  template: _.template(
    "<label><%= name %></label>" +
    "<input></input>"
  ),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
