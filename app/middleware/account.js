/**
 * 登录验证 middleware
 */

export default (app) => {
  return async function account(ctx, next) {
    ctx.locals.user = {
      name: 'yang'
    }

    return await next();
  }
}