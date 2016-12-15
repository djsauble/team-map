var PeopleItem = Backbone.View.extend({
  className: "people-list__item",

  initialize: function() {
    this.render();
  },

  template: _.template(
    "<div>" +
    "<img src='<%= photo %>' alt='<%= name %>'/>" +
    "</div>" +
    "<div>" +
    "<h3><%= name %></h3>" +
    "<small><%= team %> <%= role %></small>" +
    "</div>"
  ),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
