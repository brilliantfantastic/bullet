import Ember from "ember";

export default Ember.Mixin.create({
  didInsertElement: function() {
    return this.$().jvFloat();
  }
});
