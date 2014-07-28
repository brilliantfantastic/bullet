import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    signup: function() {
      var controller = this;
      this.get("model").save().then(function() {
        controller.transitionToRoute("journal");
      });
    }
  }
});
