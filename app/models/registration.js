import DS from 'ember-data';

export default DS.Model.extend({
  validated: DS.attr({defaultValue: false}),
  players: DS.hasMany(),
  race: DS.belongsTo()
});
