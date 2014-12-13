import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  bibNumber: DS.attr(),
  race: DS.belongsTo(),
  players: DS.hasMany(),
  arrivalTimestamp: DS.attr()

});
