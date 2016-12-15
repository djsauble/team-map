var MasterDetail = Backbone.View.extend({
  className: "master-detail",

  initialize: function() {
    // Child views
    this.master = new PeopleList();
    this.detail = new PeopleDetail();

    this.render();
  },

  render: function() {
    this.$el.append(this.master.el);
    this.$el.append(this.detail.el);
  }
});
