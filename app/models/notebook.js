import DS from "ember-data";

export default DS.Model.extend({
  pages: DS.hasMany("page", { async: true })
});
