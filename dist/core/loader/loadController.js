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
  app.controller = {};
  var filePath = path.join('../../', 'app/controller/home.js');
  var obj = require(filePath);
  var cls = 'default' in obj ? obj.default : obj;
  // 把 controller class 中的 方法拿出来
  app.controller.home = bindThis(wrapClass(cls), { app: app });
}

// Controller Class --> { fn1: function(){xx}, fn2: xx }
function wrapClass(Controller) {
  var proto = Controller.prototype;
  var ret = {};
  // tracing the prototype chain
  while (proto !== Object.prototype) {
    var keys = Object.getOwnPropertyNames(proto);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        // getOwnPropertyNames will return constructor
        // that should be ignored
        if (key === 'constructor') {
          continue;
        }
        // skip getter, setter & non-function properties
        var d = Object.getOwnPropertyDescriptor(proto, key);
        // prevent to override sub method
        if (is.function(d.value) && !ret.hasOwnProperty(key)) {
          ret[key] = methodToMiddleware(Controller, key);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    proto = Object.getPrototypeOf(proto);
  }
  return ret;

  function methodToMiddleware(Controller, key) {
    return function classControllerMiddleware() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var ctx = args[0];
      ctx.app = this.app;
      var controller = new Controller(ctx);
      if (!this.app.config.controller || !this.app.config.controller.supportParams) {
        args = [this];
      }
      return _utils2.default.callFn(controller[key], args, controller);
    };
  }
}

function bindThis(obj, that) {
  for (var k in obj) {
    if (is.function(obj[k])) obj[k] = obj[k].bind(that);
  }
  return obj;
}