/* global moment */

import Ember from "ember";

export default Ember.Object.extend({
  title: function() {
    return moment().format("MMMM D");
  }.property()
});
