import Ember from "ember";

export default Ember.TextField.extend({
  didInsertElement: function() {
    this.addObserver('value', this.valueChanged);
  },

  valueChanged: function() {
    this.$().focus().select();
    this.removeObserver('value', this.valueChanged);
  }
});
