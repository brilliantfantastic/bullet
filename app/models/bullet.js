import DS from "ember-data";

export default DS.Model.extend({
  page: DS.belongsTo("page")
});
