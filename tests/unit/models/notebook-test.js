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
  var pages = null;

  Ember.run(function() {
    notebook.get("pages").set("content", Ember.A([store.createRecord("page", {index: 1})]));
    pages = notebook.get("currentPages");
  });

  equal(pages.get("length"), 2);
  ok(pages.get("firstObject").get("isOdd"));
  ok(pages.get("lastObject").get("isEven"));
});

test("currentPages should always return two pages when there is two", function() {
  var store = this.store();
  var notebook = this.subject();
  var pages = null;

  Ember.run(function() {
    notebook.get("pages").set("content", Ember.A([store.createRecord("page", {index: 1}),
        store.createRecord("page", {index: 2})]));
    pages = notebook.get("currentPages");
  });

  equal(pages.get("length"), 2);
  ok(pages.get("firstObject").get("isOdd"));
  ok(pages.get("lastObject").get("isEven"));
});

test("currentPages should always return two pages when there is three", function() {
  var store = this.store();
  var notebook = this.subject();
  var pages = null;

  Ember.run(function() {
    var content = Ember.A();
    for (var i = 1; i <= 3; i++) {
      content.pushObject(store.createRecord("page", {index: i}));
    }
    notebook.set("pages.content", content);
    pages = notebook.get("currentPages");
  });

  equal(pages.get("length"), 2);
  ok(pages.get("firstObject").get("isEven"));
  ok(pages.get("lastObject").get("isOdd"));
});

test("currentPages should always return two pages when there is six", function() {
  var store = this.store();
  var notebook = this.subject();
  var pages = null;

  Ember.run(function() {
    var content = Ember.A();
    for (var i = 1; i <= 6; i++) {
      content.pushObject(store.createRecord("page", {index: i}));
    }
    notebook.set("pages.content", content);
    pages = notebook.get("currentPages");
  });

  equal(pages.get("length"), 2);
  ok(pages.get("firstObject").get("isOdd"));
  ok(pages.get("lastObject").get("isEven"));
});
