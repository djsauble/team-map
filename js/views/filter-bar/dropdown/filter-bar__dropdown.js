var FilterDropdown = Backbone.View.extend({
  className: "filter-bar__dropdown",

  events: {
    "change select": function(e) {
      this.model.set("selected", e.target.selectedOptions[0].value);
    }
  },

  initialize: function() {
    TeamMapEvents.on("filter:cleared", this.render, this);

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
