import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr("string"),
  index: DS.attr("number"),
  notebook: DS.belongsTo("notebook"),
  bullets: DS.hasMany("bullet"),
  pageNumber: Ember.computed.alias("index"),
  isReadOnly: Ember.computed.equal("index", 1),

  isEven: function() {
    return this.get("index") % 2 === 0;
  }.property("index"),

  isOdd: Ember.computed.not("isEven")
});
