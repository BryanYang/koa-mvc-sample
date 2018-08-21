'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 基础 Controller
 */
var Controller = function Controller(ctx) {
  _classCallCheck(this, Controller);

  this.ctx = ctx;
  this.app = ctx.app;
  this.config = ctx.app.config;
};

var HomeController = function (_Controller) {
  _inherits(HomeController, _Controller);

  function HomeController() {
    _classCallCheck(this, HomeController);

    return _possibleConstructorReturn(this, (HomeController.__proto__ || Object.getPrototypeOf(HomeController)).apply(this, arguments));
  }

  _createClass(HomeController, [{
    key: 'index',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var ctx, _qs$parseUrl, query, r, length, area, volume;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx = this.ctx;
                _qs$parseUrl = _queryString2.default.parseUrl(this.ctx.request.url), query = _qs$parseUrl.query;
                r = query.r;
                _context.next = 5;
                return this.app.service.calculate.length(r);

              case 5:
                length = _context.sent;
                _context.next = 8;
                return this.app.service.calculate.area(r);

              case 8:
                area = _context.sent;
                _context.next = 11;
                return this.app.service.calculate.volume(r);

              case 11:
                volume = _context.sent;

                ctx.body = ':-)\n    \u5706\u7684\u534A\u5F84: ' + r + '\n    \u5706\u7684\u5468\u957F: ' + length + '\n    \u5706\u7684\u9762\u79EF: ' + area + '\n    \u5706\u7684\u4F53\u79EF: ' + volume + '\n    ';
                ctx.status = 200;

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function index() {
        return _ref.apply(this, arguments);
      }

      return index;
    }()
  }]);

  return HomeController;
}(Controller);

exports.default = HomeController;