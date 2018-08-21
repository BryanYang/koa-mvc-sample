/**
 * registerViewEngine.js 代码
 */

export default (app) => {
  const engine = require(app.config.view);
  app.context.renderString = async function(str, params) {
    this.body = engine.renderString(str, params);
    this.status = 200;  
  }

  app.context.render = async function(tpl, params) {
    this.body = engine.render(tpl, params);
    this.status = 200;
  }
}