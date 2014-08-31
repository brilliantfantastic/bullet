import Ember from "ember";
import DefaultPageTitle from "bullet/utils/default-page-title";

export default Ember.Component.extend({
  classNames: ['page'],
  actions: {
    defaultTitle: function() {
      var page = this.get("page");
      if (Ember.isEmpty(page.get("title")) && !page.isTitleReadOnly) {
        page.set("title", DefaultPageTitle.create().get("title"));
      }
    }
  }
});
