import Ember from "ember";

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor('races').findBy('name', params.race_name);
  },

  serialize: function(model) {
    return { race_name: model.get('name') };
  }
});
