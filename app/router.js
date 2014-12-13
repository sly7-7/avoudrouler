import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('description');
  this.resource('races', function () {
    this.resource('race', { path: ':race_name' });
  });
  this.route('afterRace');
  this.route('gallery');
  this.route('registrations', function () {
    this.route('new');
  });
});

export default Router;
