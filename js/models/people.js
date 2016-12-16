var People = Backbone.Collection.extend({
  model: Person,

  applyFilters: function(filters) {
    var anyFiltered = false;

    this.each(function(m) {

      var filtered = false;

      filters.each(function(filter) {
        if (filter.get('type') === 'dropdown') {

          // Filter based on team
          if (filter.get('name') === 'Team') {
            if (filter.get('selected') !== 'All' && filter.get('selected') !== m.get('team')) {
              filtered = true;
              anyFiltered = true;
            }
          }

        }
        else if (filter.get('type') === 'text') {

          // Filter based on name
          if (filter.get('name') === 'Name') {
            if (filter.get('value') !== '' && m.get('name').toLowerCase().indexOf(filter.get('value').toLowerCase()) === -1) {
              filtered = true;
              anyFiltered = true;
            }
          }
        }
        else if (filter.get('type') === 'map') {

          // Filter based on map boundaries
          if (filter.get('value') !== null) {
            if (filter.get('value').includes(m.get('name')) === false) {
              filtered = true;
            }
          }
        }
      });

      m.set('filtered', filtered);
    });

    // Notify that the change event has completed
    TeamMapEvents.trigger("filter:changed", this);

    // Determine if any filters are set
    if (anyFiltered) {
      TeamMapEvents.trigger("filter:set");
    }
    else {
      TeamMapEvents.trigger("filter:cleared");
    }
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
