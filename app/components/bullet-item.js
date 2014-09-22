import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['bullet'],
  actions: {
    doneEditing: function() {
      var bullet = this.get("bullet");
      bullet.save();

      var store = bullet.get("store");
      bullet.get("page.bullets").insertAt(0, store.createRecord("taskBullet"));
    }
  }
});
