import 'babel-polyfill';
const Koa = require('koa');
const Router = require('koa-router');
import loadController from './loader/loadController';
import loadService from './loader/loadService';
import loadRouter from './loader/loadRouter';
import registerViewEngine from './register/registerViewEngine';

const app = new Koa();
app.router = new Router();

// 加载 config;
app.config = {};

// 注册 view engine
registerViewEngine(app);

loadService(app);
loadController(app);
loadRouter(app);


app.use(app.router.routes())
  .use(app.router.allowedMethods());

app.listen(3000);
console.log('服务启动在3000端口')