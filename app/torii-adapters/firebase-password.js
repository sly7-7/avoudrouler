import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    return Ember.RSVP.resolve({authData: authentication});
  }
});
