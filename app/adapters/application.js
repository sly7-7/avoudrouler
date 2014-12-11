import DS from 'ember-data';
import config from 'avoudrouler/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + config.firebaseInstance + '.firebaseio.com')
});
