var PeopleMarker = Backbone.View.extend({

  initialize: function() {

    this.marker = new google.maps.Marker({
      position: this.model.attributes.location.current,
      icon: this.model.attributes.pin,
      shape: {
        type: 'circle',
        coords: [40, 40, 40]
      }
    });

    this.model.on("change", this.render, this);

  },

  render: function() {
    if (this.cluster) {
      if (this.model.get('filtered')) {
        this.cluster.removeMarker(this.marker);
      }
      else {
        this.cluster.addMarker(this.marker);
      }
    }
  }
});
