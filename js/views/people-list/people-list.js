var PeopleList = Backbone.View.extend({
  className: "people-list",

  initialize: function() {
    var me = this;

    // Child views
    this.items = [];
    TeamMapData.each(function(m) {
      me.items.push(new PeopleItem({
        model: m
      }));
    });

    this.render();
  },

  render: function() {
    for (var i = 0; i < this.items.length; ++i) {
      this.$el.append(this.items[i].el);
    }
  }
});
