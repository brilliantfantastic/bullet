/* global invalidateSession */

import Ember from "ember";
import startApp from "../helpers/start-app";
import Configuration from 'simple-auth/configuration';

var App;

module("Acceptance - Journal Index", {
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
  visit("/journal").then(function() {
    equal(currentPath(), "signin");
  });
});
