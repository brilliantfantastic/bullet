import Ember from "ember";
import DefaultPageTitle from "bullet/utils/default-page-title";

export default Ember.Component.extend({
  classNames: ['page'],
  focusIn: function() {
    var page = this.get("page");
    this._actions['addBullet'].apply(this, [page]);
  },
  actions: {
    defaultTitle: function(page) {
      if (Ember.isEmpty(page.get("title")) && !page.isReadOnly) {
        page.set("title", DefaultPageTitle.create().get("title"));
      }
    },
    addBullet: function(page) {
      if (!page.get("isReadOnly") && Ember.isEmpty(page.get("bullets")) && !Ember.isEmpty(page.get("title"))) {
        var store = page.get("store");
        page.get("bullets").pushObject(store.createRecord("taskBullet"));
      }
    }
  }
});
