import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr("string"),
  page: DS.belongsTo("page"),
  type: function() {
    return this.constructor.typeKey.dasherize();
  }.property()
});
