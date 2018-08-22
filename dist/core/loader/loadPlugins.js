'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var path = require('path');

exports.default = function (app) {
  var p = path.join(process.cwd(), 'config', 'plugin.js');
  var plugins = require(p);

  app.plugins = plugins;
  var enabledPlugins = {};
  for (var _p in plugins) {
    if (plugins[_p].enable) {
      enabledPlugins[_p] = plugins[_p];
    }
  }
  app.enabledPlugins = enabledPlugins;
};