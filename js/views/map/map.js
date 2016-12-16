var Map = Backbone.View.extend({
  className: "map",

  mapApi: null,
  mapReference: null,

  initialize: function() {
    var me = this;

    TeamMapEvents.on("map:init", function(maps) {
      me.mapApi = maps;
      me.render();
    }, me);
  },

  render: function() {
    var me = this;

    // Add the map to the DOM, if it doesn't exist yet
    if (this.mapApi && !this.mapReference) {
      this.mapReference = new this.mapApi.Map($(".map")[0], {
        zoom: 2,
        center: {lat: 38.272689, lng: 10.546875}
      });

      // Generate map markers
      this.mapMarkers = TeamMapData.map(function(m) {
        return new PeopleMarker({
          model: m
        });
      });

      // Add a marker clusterer to manage the markers
      this.mapMarkerCluster = new MarkerClusterer(
        this.mapReference,
        this.mapMarkers.map(function(m) { return m.marker; }),
        {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        }
      );

      // Allow markers to filter themselves out of the cluster
      this.mapMarkers.forEach(function(m) {
        m.cluster = me.mapMarkerCluster;
      });
    }
  }
});
