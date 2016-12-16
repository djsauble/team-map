var FilterText = Backbone.View.extend({
  className: "filter-bar__text",

  events: {
    "keyup input": function(e) {
      this.model.set("value", e.target.value);
    }
  },

  initialize: function() {

    TeamMapEvents.on('filter:name', this.render, this);

    this.render();
  },

  template: _.template(
    "<label><%= name %></label>" +
    "<input value='<%= value %>'></input>"
  ),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
