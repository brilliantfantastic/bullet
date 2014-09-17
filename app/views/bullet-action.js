import Ember from 'ember';

export default Ember.View.extend({
  templateName: function() {
    var componentPath = "components/" + this.get("bullet.type") + "-action";
    return componentPath;
  }.property().cacheable()
});
