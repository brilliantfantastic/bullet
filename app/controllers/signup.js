import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    signup: function() {
      this.get("model").save().then(function() {
      });
    }
  }
});
