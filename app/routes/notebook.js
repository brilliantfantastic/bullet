import Ember from "ember";
import AuthenticatedRouteMixin from "simple-auth/mixins/authenticated-route-mixin";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find("notebook", { last: true, create: true }).then(function(notebooks) {
      return notebooks.get("lastObject");
    });
  }
});
