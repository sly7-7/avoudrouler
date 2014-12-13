import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  startTimestamp: DS.attr(),
  endTimestamp: DS.attr(),
  raceType: DS.belongsTo(),
  teams: DS.hasMany()
});
