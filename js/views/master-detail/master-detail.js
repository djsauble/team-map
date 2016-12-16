var MasterDetail = Backbone.View.extend({
  className: "master-detail",

  // Constants
  STATES: {
    0: "master-detail_state_empty",
    1: "master-detail_state_detail",
    2: "master-detail_state_master"
  },
  STATE_EMPTY: 0,
  STATE_DETAIL: 1,
  STATE_MASTER: 2,

  initialize: function() {
    // Child views
    this.empty = new EmptyState();
    this.empty.$el.addClass("master-detail__empty");
    this.detail = new PeopleDetail();
    this.detail.$el.addClass("master-detail__detail");
    this.master = new PeopleList();
    this.master.$el.addClass("master-detail__master");

    // State
    this.setState(this.STATE_MASTER);

    // Listen for state changes
    TeamMapEvents.on("master-detail:state:change", function(state) {
      this.setState(state);
    }, this);

    this.render();
  },

  render: function() {
    this.$el.append(this.empty.el);
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
