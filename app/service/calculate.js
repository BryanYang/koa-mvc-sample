

/**
 * 基础 Service
 */
class Service {
  constructor(ctx) {
    this.app = ctx.app;
    this.config = ctx.app.config;
  }
}
export default class CalcService extends Service {
  async length(r) {
    return 2 * Math.PI * r;
  }

  async area(r) {
    return r * r * Math.PI;
  }

  async volume(r) {
    return 4 / 3 * Math.pow(r, 3) * Math.PI; 
  }

}