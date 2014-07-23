import Ember from "ember";

export default Ember.Mixin.create({
  didInsertElement: function() {
    console.log("item has been inserted");
    return this.$().jvFloat();
  }
});
