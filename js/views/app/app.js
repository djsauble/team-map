var App = Backbone.View.extend({

  initialize: function() {
    // Child views
    this.banner = new Banner();
    this.filterBar = new FilterBar();
    this.content = new Content();

    // As soon as the app has been initialized, render it to the DOM
    this.render();
  },

  render: function() {
    this.$el.append(this.filterBar.el);
    this.$el.append(this.content.el);
    this.$el.append(this.banner.el);
  }
});
