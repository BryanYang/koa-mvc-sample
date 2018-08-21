'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;
/**
 * load controller to app
 */

var path = require('path');
function load(app) {
  var filePath = path.join('../../', 'app/router.js');
  var router = require(filePath);
  router.default(app);
}