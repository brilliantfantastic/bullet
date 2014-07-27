import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BulletENV.locationType
});

Router.map(function() {
  this.route("signup");
});

export default Router;
