import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function () {
    var self = this;
    return this.get('session').open('firebase-password').then(function () {
      return self.transitionTo('home');
    });
  }
});
