/**
 * 加载 middleware
 */
const path = require("path");

export default function load(app) {
  const middlewares = app.config.middlewares;
  // demo，只加载config中的一个中间件。事实上此处是依次加载所有。
  const filePath = path.join("../../", `app/middleware/${middlewares[0]}.js`);
  const fn = require(filePath).default;
  app.use(fn(app));

  console.log(app.enabledPlugins);
  // 加载插件的middleware
  for (const k in app.enabledPlugins) {
    const p = app.enabledPlugins[k];
    const filePath = path.join(
      process.cwd(),
      p.path,
      "app",
      "middleware",
      "xframe.js"
    );
    const fn = require(filePath);
    app.use(fn(app));
  }
}
