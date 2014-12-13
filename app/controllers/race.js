import Ember from 'ember';

export default Ember.ObjectController.extend({

  routeSrc: function () {
    return 'images/' + this.get('route');
  }.property('route')
});
