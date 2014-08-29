import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
import DefaultPageTitle from "bullet/utils/default-page-title";

var subject, _date;

module("Unit - DefaultPageTitle Utility", {
  setup: function() {
    _date = window.Date;
    subject = DefaultPageTitle.create();
  },
  teardown: function() {
    window.Date = _date;
  }
});

test("defaults the page title to the current month and year", function() {
  window.Date = function() { return new _date("Sat Oct 01 2011 00:00:00"); };
  equal(subject.get('title'), "October 1");
});
