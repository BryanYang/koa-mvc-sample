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
    await ctx.renderString('HEllo {{ name }}', ctx.locals.user);
  }

}