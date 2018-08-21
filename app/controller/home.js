import qs from 'query-string';

/**
 * 基础 Controller
 */
class Controller {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config;
  }
}

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { query } = qs.parseUrl(this.ctx.request.url);
    const r = query.r;
    const length = await this.app.service.calculate.length(r);
    const area = await this.app.service.calculate.area(r);
    const volume = await this.app.service.calculate.volume(r);

    await ctx.renderString('HEllo {{ username }}', {username: 'yang'});

    /*
    ctx.body = `:-)
    圆的半径: ${r}
    圆的周长: ${length}
    圆的面积: ${area}
    圆的体积: ${volume}
    `
    ctx.status = 200;
    */
  }

}