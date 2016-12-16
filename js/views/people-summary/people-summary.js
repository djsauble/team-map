var PeopleSummary = Backbone.View.extend({
  className: "people-summary",

  events: {
    "click": function() {
      TeamMapEvents.trigger("filter:name", this.model.get("name"));
    }
  },

  initialize: function() {

    this.model.on("change", this.render, this);

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

    if (this.model.get('filtered')) {
      this.$el.hide();
    }
    else {
      this.$el.show();
    }
  }
});
