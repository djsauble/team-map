var Person = Backbone.Model.extend({
  defaults: {
    "name": "John Smith",
    "photo": "images/unknown.png",
    "role": "Sonatyper",
    "team": "No team",
    "email": "No email",
    "interests": [],
    "location": null,
    "bio": "No bio",
    "filtered": false
  }
});
