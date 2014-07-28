import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    signup: function() {
      var controller = this;
      var session = this.get('session');
      this.get("model").save().then(function(user) {
        var properties = { user_token: user.get('accessToken'), user_email: user.get('email') };
        session.setup(BulletENV.authenticator, properties, true);
        controller.transitionToRoute("journal");
      });
    }
  }
});
