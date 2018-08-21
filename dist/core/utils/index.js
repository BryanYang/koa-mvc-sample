'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var is = require('is-type-of');
var co = require('co');

exports.default = {
  callFn: function callFn(fn, args, ctx) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _fn;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              args = args || [];

              if (is.function(fn)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              if (is.generatorFunction(fn)) fn = co.wrap(fn);
              return _context.abrupt('return', ctx ? (_fn = fn).call.apply(_fn, [ctx].concat(_toConsumableArray(args))) : fn.apply(undefined, _toConsumableArray(args)));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};