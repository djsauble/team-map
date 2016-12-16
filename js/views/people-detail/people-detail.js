var PeopleDetail = Backbone.View.extend({
  className: "people-detail",

  initialize: function() {
    var me = this;

    // Find the first non-filtered model and display that
    TeamMapEvents.on("filter:changed", this.updateModel, this);

    this.render();
  },

  template: _.template(
    "<img src='<%= photo %>' alt='<%= name %>'/>" +
    "<h2><%= name %></h2>" +
    "<span><%= team %> <%= role %></span>" +
    "<h4>Email</h4>" +
    "<a href='mailto:<%= email %>'><%= email %></a>" +
    "<% if (interests.length > 0) { %>" +
    "<h4>Interests</h4>" +
    "<ul>" +
    "<% interests.forEach(function(i) {  %>" +
    "<li><%= i %></li>" +
    "<% }); %>" +
    "</ul>" +
    "<% } %>"
  ),

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }
  },

  updateModel: function(collection) {
    for (var i = 0; i < collection.length; ++i) {
      if (collection.at(i).get("filtered") === false) {
        this.model = collection.at(i);
        this.render();
        return;
      }
    }
  }
});
