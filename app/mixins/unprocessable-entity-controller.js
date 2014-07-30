import Ember from "ember";

export default Ember.Mixin.create({
  showUnprocessableEntityError: function(error) {
    var errors = [];
    Object.keys(error.errors).forEach(function(key) {
      errors.pushObject(error.errors[key]);
    });
    this.set("errorMessages", errors);
  }
});
