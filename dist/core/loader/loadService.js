'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;

var _utils = require('../utils/');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * load controller to app
 */

var path = require('path');
var is = require('is-type-of');
function load(app) {
  app.service = {};
  var filePath = path.join('../../', 'app/service/calculate.js');
  var obj = require(filePath);
  var cls = 'default' in obj ? obj.default : obj;
  app.service.calculate = getInstance(cls, app);
}

function getInstance(Service, app) {
  var instance = void 0;
  if (is.class(Service)) {
    instance = new Service({ app: app });
  }
  return instance;
}