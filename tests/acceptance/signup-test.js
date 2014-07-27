import Ember from "ember";
import { test } from "ember-qunit";
import startApp from "../helpers/start-app";

var App;

module("Signup Acceptance Test", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Successful signup", function() {
  expect(1);
  visit("/signup");
  fillIn("input[placeholder='Name']", "Jimmy Page");
  fillIn("input[placeholder='Email']", "jimmy.page@zeppelin.com");
  fillIn("input[placeholder='Password']", "communicationbreakdown");
  click("button").then(function() {
    equal(find("ul.nav li:last").text(), "Sign out");
  });
});
