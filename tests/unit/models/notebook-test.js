import Ember from "ember";
import { test, moduleForModel } from "ember-qunit";

moduleForModel("notebook", "Notebook Model", {
  needs: ["model:page"]
});

test("currentPages should always return two pages when there is none", function() {
  var notebook = this.subject();
  equal(notebook.get("currentPages").get("length"), 2);
  ok(notebook.get("currentPages").get("firstObject").get("isOdd"));
  ok(notebook.get("currentPages").get("lastObject").get("isEven"));
});

test("currentPages should always return two pages when there is one", function() {
  var store = this.store();
  var notebook = this.subject();

  Ember.run(function() {
    var firstPage = store.createRecord("page", {index: 1});
    notebook.get("pages").then(function(pages) { pages.pushObject(firstPage); });
  });
  var pages = null;
  Ember.run(function() { pages = notebook.get("currentPages"); });

  ok(pages.get("firstObject").get("isOdd"));
  ok(pages.get("lastObject").get("isEven"));
});
