import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
import DefaultPageTitle from "bullet/utils/default-page-title";

var subject;

module("Unit - DefaultPageTitle Utility", {
  setup: function() {
    subject = DefaultPageTitle.create();
  }
});

test("defaults the page title to the current month and year", function() {
  equal(subject.get('title'), "August 29");
});
