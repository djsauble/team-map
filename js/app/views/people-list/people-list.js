var PeopleList = Backbone.View.extend({
  className: "people-list",

  initialize: function() {
    // Child views
    this.items = [];
    for (var i = 0; i < TeamMapData.length; ++i) {
      this.items.push(new PeopleItem({
        model: TeamMapData.at(i)
      }));
    }

    this.render();
  },

  render: function() {
    for (var i = 0; i < this.items.length; ++i) {
      this.$el.append(this.items[i].el);
    }
  }
});
