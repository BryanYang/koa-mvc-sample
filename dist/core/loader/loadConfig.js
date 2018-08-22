'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var path = require('path');

exports.default = function (app) {
  // 默认config
  var p = path.join(process.cwd(), 'config', 'default.js');
  var config = require(p);
  app.config = config;
};