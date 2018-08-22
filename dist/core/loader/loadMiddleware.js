'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;

var path = require('path');

function load(app) {
  var middlewares = app.config.middlewares;
  // demo，只加载config中的一个中间件。事实上此处是依次加载所有。
  var filePath = path.join('../../', 'app/middleware/' + middlewares[0] + '.js');
  var fn = require(filePath).default;
  app.use(fn(app));
}