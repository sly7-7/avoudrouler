import Ember from "ember";

export default Ember.Route.extend({
  model: function () {
    return [
      Ember.Object.create({name: "5km", imageSrc: "images/parcours_decouverte.png"}),
      Ember.Object.create({name: "13km", imageSrc: "images/parcours_familial.png"}),
      Ember.Object.create({name: "22km", imageSrc: "images/parcours_sportif.png"}),
      Ember.Object.create({name: "Randonnée", imageSrc: "images/parcours_pedestre.png"}),
    ];
  }
});
