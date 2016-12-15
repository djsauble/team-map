var Content = Backbone.View.extend({
  className: "content",

  initialize: function() {
    // Child views
    this.mapView = new Map();
    this.masterDetail = new MasterDetail();

    this.render();
  },

  render: function() {
    this.$el.append(this.mapView.el);
    this.$el.append(this.masterDetail.el);
  }
});
