/* global Pretender */

import Ember from "ember";
import startApp from "../helpers/start-app";

var App, server;

module("Acceptance - Signup", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  }
});

test("signup with valid credentials should sign the user in", function() {
  server = new Pretender(function() {
    this.post("/api/users", function() {
      var user = { user: { id: 1, name: "Jimmy Page", email: "jimmy.page@zeppelin.com", access_token: "secret" } };
      return [201, { "Content-Type": "application/json" }, JSON.stringify(user)];
    });
    this.get("/api/notebooks", function() {
      return [200, { "Content-Type": "application/json" }, JSON.stringify({ notebooks: [] })];
    });
  });

  visit("/signup");
  fillIn("input[placeholder='Name']", "Jimmy Page");
  fillIn("input[placeholder='Email']", "jimmy.page@zeppelin.com");
  fillIn("input[placeholder='Password']", "communicationbreakdown");
  click("button").then(function() {
    equal(currentPath(), "notebook");
    equal(find("ul.nav li:last").text(), "Sign out");
  });
});

test("signup with invalid credentials should display a message and not sign in", function() {
  server = new Pretender(function() {
    this.post("/api/users", function() {
      var errors = { errors: ["Email is required", "Name is required"] };
      return [422, { "Content-Type": "application/json" }, JSON.stringify(errors)];
    });
  });

  visit("/signup");
  fillIn("input[placeholder='Name']", "Jimmy Page");
  click("button").then(function() {
    equal(currentPath(), "signup");
    ok(new RegExp(/Email is required/).test(find(".errorSummary").text()));
    ok(new RegExp(/Name is required/).test(find(".errorSummary").text()));
  });
});
