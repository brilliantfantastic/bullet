import Ember from "ember";
import { test, moduleForModel } from "ember-qunit";

moduleForModel("page", "Page Model", {
  needs: ["model:notebook"]
});

test("odd page should be determined by index", function() {
  var page = this.subject({index: 1});
  equal(page.get("isOdd"), true);
  equal(page.get("isEven"), false);
});

test("even page should be determined by index", function() {
  var page = this.subject({index: 2});
  equal(page.get("isOdd"), false);
  equal(page.get("isEven"), true);
});

test("title is readonly for the index page", function() {
  var page = this.subject({index: 1});
  equal(page.get("isTitleReadOnly"), true);
});

test("title is not readonly for anything past the index page", function() {
  var page = this.subject({index: 2});
  equal(page.get("isTitleReadOnly"), false);
});
