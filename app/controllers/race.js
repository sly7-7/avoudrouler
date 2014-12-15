import Ember from 'ember';

export default Ember.ObjectController.extend({

  routeSrc: function () {
    return 'assets/images/' + this.get('route');
  }.property('route')
});
