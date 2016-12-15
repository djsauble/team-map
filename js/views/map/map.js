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
    if (this.mapApi && !this.mapReference) {
      this.mapReference = new this.mapApi.Map($(".map")[0], {
        zoom: 2,
        center: {lat: 38.272689, lng: 10.546875}
      });
    }
  }
});
