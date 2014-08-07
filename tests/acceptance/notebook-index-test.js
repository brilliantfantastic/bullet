/* global Pretender, authenticateSession, invalidateSession */

import Ember from "ember";
import startApp from "../helpers/start-app";
import Configuration from 'simple-auth/configuration';

var App, server;

module("Acceptance - Notebook Index", {
  setup: function() {
    App = startApp();
    Configuration.authenticationRoute = "signin";
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    if (!Ember.isNone(server)) {
      server.shutdown();
    }
  }
});

test("visiting without a signed in user should redirect to signin", function() {
  invalidateSession();
  visit("/notebook").then(function() {
    equal(currentPath(), "signin");
  });
});

test("should retrieve the last notebook for the user", function() {
  authenticateSession();
  server = new Pretender(function() {
    this.get("/api/notebooks", function() {
      var notebooks = { notebooks: [{ id: 1, page_ids: [10] }], pages: [{ id: 10, index: 1, title: "Index" }] };
      return [200, { "Content-Type": "application/json" }, JSON.stringify(notebooks)];
    });
  });
  visit("/notebook").then(function() {
    equal(find(".page--title").text(), "Index");
  });
});
