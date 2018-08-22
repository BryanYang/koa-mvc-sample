'use strict';

require('babel-polyfill');

var _loadController = require('./loader/loadController');

var _loadController2 = _interopRequireDefault(_loadController);

var _loadService = require('./loader/loadService');

var _loadService2 = _interopRequireDefault(_loadService);

var _loadRouter = require('./loader/loadRouter');

var _loadRouter2 = _interopRequireDefault(_loadRouter);

var _loadMiddleware = require('./loader/loadMiddleware');

var _loadMiddleware2 = _interopRequireDefault(_loadMiddleware);

var _registerViewEngine = require('./register/registerViewEngine');

var _registerViewEngine2 = _interopRequireDefault(_registerViewEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var Router = require('koa-router');


var app = new Koa();
app.router = new Router();
app.context.locals = {};

// 加载 config;
app.config = {
  view: 'nunjucks', // 配置engine为 nunjucks
  middlewares: ['account']
};

// 注册 view engine
(0, _registerViewEngine2.default)(app);

(0, _loadService2.default)(app);
// 加载中间件
(0, _loadMiddleware2.default)(app);
(0, _loadController2.default)(app);
(0, _loadRouter2.default)(app);

app.use(app.router.routes()).use(app.router.allowedMethods());

app.listen(3000);
console.log('服务启动在3000端口');