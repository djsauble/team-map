var FilterBar = Backbone.View.extend({
  className: "filter-bar",

  initialize: function() {
    var me = this;

    // Child views
    this.filterViews = [];
    this.collection.forEach(function(m) {
      if (m.get('type') === 'dropdown') {
        me.filterViews.push(new FilterDropdown({
          model: m
        }));
      }
      else {
        me.filterViews.push(new FilterText({
          model: m
        }));
      }
    });

    this.render();
  },

  render: function() {
    var me = this;

    this.filterViews.forEach(function(v) {
      me.$el.append(v.el);
    });
  }
});
