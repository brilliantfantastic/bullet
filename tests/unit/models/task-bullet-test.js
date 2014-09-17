import Ember from "ember";
import { test, moduleForModel } from "ember-qunit";

moduleForModel("task-bullet", "Task Bullet Model", {
  needs: ["model:page"]
});

test("stores a due date", function() {
  var due = new Date();
  var bullet = this.subject({dueDate: due});
  equal(bullet.get("dueDate"), due);
});

test("type is the dasherized version of the typeKey", function() {
  equal(this.subject().get("type"), "task-bullet");
});
