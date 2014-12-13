import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  adress: DS.attr('string'),
  zipCode: DS.attr('number'),
  city: DS.attr('string'),
  mail: DS.attr('string')
});
