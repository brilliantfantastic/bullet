/* global Pretender */

import Ember from "ember";
import { test } from "ember-qunit";
import startApp from "../helpers/start-app";

var App, server;

module("Signup Acceptance Test", {
  setup: function() {
    App = startApp();
    server = new Pretender(function() {
      this.post("/api/users", function() {
        var user = { user: { id: 1, name: "Jimmy Page", email: "jimmy.page@zeppelin.com", access_token: "secret" } };
        return [201, { "Content-Type": "application/json" }, JSON.stringify(user)];
      });
    });
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  }
});

test("Successful signup", function() {
  visit("/signup");
  fillIn("input[placeholder='Name']", "Jimmy Page");
  fillIn("input[placeholder='Email']", "jimmy.page@zeppelin.com");
  fillIn("input[placeholder='Password']", "communicationbreakdown");
  click("button").then(function() {
    equal(find("ul.nav li:last").text(), "Sign out");
  });
});
