import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor('race-type').get('raceEditions').then(function (raceEditions){
      return raceEditions.findBy('id', params.race_edition_id);
    });
  },

  renderTemplate: function () {
    this.render({into: 'races'});
  }
});
