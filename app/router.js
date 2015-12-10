import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('syntax');
  this.route('style');
  this.route('interpolation');
  this.route('helper');
  this.route('compiledhtml');
  this.route('performance');
  this.route('each');
  this.route('server');
  this.route('animation');
  this.route('updateHierarchy');
  this.route('comapare');
  this.route('helpercode');
  this.route('glimmer');
});

export default Router;
