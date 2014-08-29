/* global Pretender, authenticateSession */

import Ember from "ember";
import startApp from "../helpers/start-app";

var App, server;

module("Acceptance - Empty Page", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    if (!Ember.isNone(server)) {
      server.shutdown();
    }
  }
});

test("should default the page title when clicked on", function() {
  authenticateSession();
  server = new Pretender(function() {
    this.get("/api/notebooks", function() {
      var notebooks = { notebooks: [{ id: 1, page_ids: [10] }], pages: [{ id: 10, index: 1, title: "Index" }] };
      return [200, { "Content-Type": "application/json" }, JSON.stringify(notebooks)];
    });
  });
  visit("/notebook").then(function() {
    click(".page:last .page--content");
    andThen(function() {
      equal(find(".page:last .page--title input").val(), "August 28");
    });
  });
});
