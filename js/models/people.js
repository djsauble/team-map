var People = Backbone.Collection.extend({
  model: Person,

  initialize: function() {

    // Whenever the collection changes, check the filtered count
    TeamMapEvents.on("filter:change", this.updateState, this);
  },

  applyFilters: function(filters) {
    this.each(function(m) {

      var filtered = false;

      filters.each(function(filter) {
        if (filter.get('type') === 'dropdown') {

          // Filter based on team
          if (filter.get('name') === 'Team') {
            if (filter.get('selected') !== 'All' && filter.get('selected') !== m.get('team')) {
              filtered = true;
            }
          }

        }
        else {

          // Filter based on name
          if (filter.get('name') === 'Name') {
            if (filter.get('value') !== '' && m.get('name').toLowerCase().indexOf(filter.get('value').toLowerCase()) === -1) {
              filtered = true;
            }
          }
        }
      });

      m.set('filtered', filtered);
    });

    TeamMapEvents.trigger("filter:changed", this);
  },

  visible: function() {
    var count = 0;
    this.each(function(m) {
      if (m.get("filtered") === false) {
        count += 1;
      }
    });
    return count;
  }
});
