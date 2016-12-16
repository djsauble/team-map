var MasterDetail = Backbone.View.extend({
  className: "master-detail",

  // Constants
  STATES: {
    0: "master-detail_state_master",
    1: "master-detail_state_detail"
  },
  STATE_MASTER: 0,
  STATE_DETAIL: 1,

  initialize: function() {
    // Child views
    this.master = new PeopleList();
    this.master.$el.addClass("master-detail__master");
    this.detail = new PeopleDetail();
    this.detail.$el.addClass("master-detail__detail");

    // State
    this.setState(this.STATE_MASTER);

    this.render();
  },

  render: function() {
    this.$el.append(this.master.el);
    this.$el.append(this.detail.el);
  },

  setState: function(state) {
    for (var i = 0; i < Object.keys(this.STATES).length; ++i) {
      if (i === state) {
        this.$el.addClass(this.STATES[i]);
      }
      else {
        this.$el.removeClass(this.STATES[i]);
      }
    }
  }
});
