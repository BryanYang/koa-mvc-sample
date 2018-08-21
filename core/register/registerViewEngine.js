import nunjucks from 'nunjucks';

export default (app) => {
  app.context.renderString = async function(str, params) {
    this.body = nunjucks.renderString(str, params);
    this.status = 200;  
  }

  app.context.render = async function(tpl, params) {
    this.body = nunjucks.render(tpl, params);
    this.status = 200;
  }
}