
const path = require('path')


export default (app) => {
  // 默认config
  const p = path.join(process.cwd(), 'config', 'default.js')
  const config = require(p);
  app.config = config;
}