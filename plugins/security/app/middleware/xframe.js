/**
 *  对cookie 进行安全封装
 */

module.exports = function (app) {
  return async function account(ctx, next) {
    await next();
    if(app.config.security && app.config.security.xframe) {
      ctx.set('X-Frame-Options', 'SAMEORIGIN');
    }
  }
}