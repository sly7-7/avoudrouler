import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  startTimestamp: DS.attr(),
  endTimestamp: DS.attr(),
  raceType: DS.belongsTo('race-type'),
  teams: DS.hasMany()
});
