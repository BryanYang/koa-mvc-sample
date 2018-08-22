
module.exports = {
  view: 'nunjucks', // 配置engine为 nunjucks
  middlewares: ['account'],
  security: {
    xframe: true,
  }
}