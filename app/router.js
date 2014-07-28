import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BulletENV.locationType
});

Router.map(function() {
  this.route("signup");
  this.route("signin");
  this.route("journal");
});

export default Router;
