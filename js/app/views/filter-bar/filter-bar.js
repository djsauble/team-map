var FilterBar = Backbone.View.extend({
  className: "filter-bar",

  initialize: function() {
    // Child views
    this.teamFilter = new FilterDropdown();
    this.interestFilter = new FilterDropdown();
    this.locationFilter = new FilterDropdown();
    this.freeTextFilter = new FilterText();

    this.render();
  },

  render: function() {
    this.$el.append(this.teamFilter.el);
    this.$el.append(this.interestFilter.el);
    this.$el.append(this.locationFilter.el);
    this.$el.append(this.freeTextFilter.el);
  }
});
