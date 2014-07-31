/* global authenticateSession, invalidateSession */

import Ember from "ember";
import startApp from "../helpers/start-app";
import Configuration from 'simple-auth/configuration';

var App;

module("Acceptance - Notebook Index", {
  setup: function() {
    App = startApp();
    Configuration.authenticationRoute = "signin";
  },
  teardown: function() {
    Ember.run(App, App.destroy);
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
  visit("/notebook").then(function() {
    equal(find(".notebook--page-title").text(), "Index");
  });
});
