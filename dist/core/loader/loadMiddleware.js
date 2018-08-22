"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;
/**
 * 加载 middleware
 */
var path = require("path");

function load(app) {
  var middlewares = app.config.middlewares;
  // demo，只加载config中的一个中间件。事实上此处是依次加载所有。
  var filePath = path.join("../../", "app/middleware/" + middlewares[0] + ".js");
  var fn = require(filePath).default;
  app.use(fn(app));

  console.log(app.enabledPlugins);
  // 加载插件的middleware
  for (var k in app.enabledPlugins) {
    var p = app.enabledPlugins[k];
    var _filePath = path.join(process.cwd(), p.path, "app", "middleware", "xframe.js");
    var _fn = require(_filePath);
    app.use(_fn(app));
  }
}