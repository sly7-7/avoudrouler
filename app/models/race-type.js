import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  route: DS.attr('string'),
  bibCode: DS.attr('number'),
  raceEditions: DS.hasMany('race-editions', {async: true}),
});
