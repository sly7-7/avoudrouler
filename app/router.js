import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('description');
  this.resource('races', function () {
    this.resource('race-type', { path: ':race_type_id' }, function () {
      this.resource('race-edition', { path: ':race_edition_id' });
    });
  });
  this.route('afterRace');
  this.route('gallery');
  this.route('registrations', function () {
    this.route('new');
  });
});

export default Router;
