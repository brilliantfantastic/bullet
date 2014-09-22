import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['bullet'],
  actions: {
    doneEditing: function() {
      var bullet = this.get("bullet");
      bullet.save();
    }
  }
});
