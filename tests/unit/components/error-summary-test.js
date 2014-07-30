import Ember from "ember";
import { test, moduleForComponent } from "ember-qunit";

moduleForComponent("error-summary");

test("rendering as a list should be the default", function() {
  var component = this.subject();

  equal(this.$().prop("tagName"), "UL");
});

test("default class should be errorSummary", function() {
  var component = this.subject();

  equal(this.$().attr("class"), "ember-view errorSummary");
});

test("passing in the errors should render as a list", function() {
  var component = this.subject();
  var errors = ["Error #1", "Error #2"];

  Ember.run(function(){
    component.set("errors", errors);
  });

  equal(this.$().children("li").length, 2);
  equal(this.$().children("li:first").text(), "Error #1");
  equal(this.$().children("li:last").text(), "Error #2");
});
