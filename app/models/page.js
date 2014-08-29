import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr("string"),
  index: DS.attr("number"),
  notebook: DS.belongsTo("notebook"),

  pageNumber: function() {
    return this.get("index");
  }.property("index"),

  isTitleReadOnly: function() {
    return this.get("index") === 1;
  }.property("index"),

  isEven: function() {
    return this.get("index") % 2 === 0;
  }.property("index"),

  isOdd: function() {
    return !this.get("isEven");
  }.property("index")
});
