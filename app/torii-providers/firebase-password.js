import Ember from "ember";
import config from 'avoudrouler/config/environment';

var ref = new window.Firebase('https://' + config.firebaseInstance + '.firebaseio.com');

export default Ember.Object.extend({

  open: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      ref.authWithPassword({
        email    : "sylvain.mina@gmail.com",
        password : "*******"
      }, function(error, authData) {
        if (error === null) {
          console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
          resolve(authData);
        } else {
          console.log("Error authenticating user:", error);
          reject(error);
        }
      });
    });
  }
});
