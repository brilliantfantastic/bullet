import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    defaultTitle: function() {
      var page = this.get("model");
      if (Ember.isEmpty(page.get("title")) && !page.isTitleReadOnly) {
        page.set("title", "August 28");
      }
    }
  }
});
