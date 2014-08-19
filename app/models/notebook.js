import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  pages: DS.hasMany("page", { async: true }),

  currentPages: function() {
    var pages = this.get("pages.content") || Ember.A();
    var store = this.store;

    if (Ember.isEmpty(pages)) {
      pages.pushObject(store.createRecord("page", { index: 1 }));
      pages.pushObject(store.createRecord("page", { index: 2 }));
    } else if (pages.get("length") === 1) {
      pages.pushObject(store.createRecord("page", { index: 2 }));
    }
    return pages;
  }.property("pages"),
});
