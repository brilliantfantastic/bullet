import DS from "ember-data";
import Bullet from "bullet/models/bullet";

export default Bullet.extend({
  isComplete: DS.attr("boolean")
});
