/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/moment/moment.js', {
  exports: {
    moment: ['default']
  }
});
app.import('vendor/JVFloat/jvfloat.js');
app.import('vendor/JVFloat/jvfloat.css');

module.exports = app.toTree();
