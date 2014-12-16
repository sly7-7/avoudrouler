import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  bibNumber: DS.attr(),
  raceEdition: DS.belongsTo(),
  players: DS.hasMany(),
  arrivalTimestamp: DS.attr()
});
