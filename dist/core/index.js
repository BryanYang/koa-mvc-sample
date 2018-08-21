'use strict';

require('babel-polyfill');

var _loadController = require('./loader/loadController');

var _loadController2 = _interopRequireDefault(_loadController);

var _loadService = require('./loader/loadService');

var _loadService2 = _interopRequireDefault(_loadService);

var _loadRouter = require('./loader/loadRouter');

var _loadRouter2 = _interopRequireDefault(_loadRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var Router = require('koa-router');


var app = new Koa();
app.router = new Router();

// 加载 config;
app.config = {};
(0, _loadService2.default)(app);
(0, _loadController2.default)(app);
(0, _loadRouter2.default)(app);

app.use(app.router.routes()).use(app.router.allowedMethods());

app.listen(3000);
console.log('服务启动在3000端口');