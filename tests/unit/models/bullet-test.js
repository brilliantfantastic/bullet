import Ember from "ember";
import { test, moduleForModel } from "ember-qunit";

moduleForModel("bullet", "Bullet Model", {
  needs: ["model:page"]
});

test("stores a title", function() {
  var bullet = this.subject({title: "Hello World"});
  equal(bullet.get("title"), "Hello World");
});
