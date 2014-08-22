import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  pages: DS.hasMany("page", { async: true }),

  currentPages: function() {
    var pages = this.get("pages.content") || Ember.A();
    var store = this.store;
    var limit = 2;
    var length = pages.get("length");

    if (length < limit) { // Need to add additional pages
      for (var i = length; i < limit; i++) {
        pages.pushObject(store.createRecord("page", { index: i + 1 }));
      }
    } else if (length > limit) { // Need to slice existing pages
      pages = pages.slice(limit * -1);
    }
    return pages;
  }.property("pages"),
});
