var FilterDropdown = Backbone.View.extend({
  className: "filter-bar__dropdown",

  initialize: function() {
    this.render();
  },

  template: _.template(
    "<label><%= name %></label>" +
    "<select>" +
    "<% options.forEach(function(o) { %>" +
    "<% if (selected === o) { %>" +
    "<option selected><%= o %></option>" +
    "<% } else { %>" +
    "<option><%= o %></option>" +
    "<% } %>" +
    "<% }); %>" +
    "</select>"
  ),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
