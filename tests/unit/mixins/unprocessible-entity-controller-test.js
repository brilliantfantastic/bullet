import Ember from "ember";
import { test, moduleFor } from "ember-qunit";
import UnprocessableEntityControllerMixin from "bullet/mixins/unprocessable-entity-controller";

var subject;

module("Unit - UnprocessableEntityController Mixin", {
  setup: function() {
    subject =  Ember.Object.createWithMixins(UnprocessableEntityControllerMixin);
  }
});

test("sets the error messages", function() {
  var errors = { errors: { 0: "Error #1", 1: "Error #2" }};
  subject.showUnprocessableEntityError(errors);
  deepEqual(subject.get("errorMessages"), ["Error #1", "Error #2"]);
});
