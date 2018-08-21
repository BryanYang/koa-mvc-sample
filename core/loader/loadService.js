/**
 * load controller to app
 */

const path = require('path');
const is = require('is-type-of');
import utils from '../utils/';

export default function load(app) {
  app.service = {};
  const filePath = path.join('../../', 'app/service/calculate.js');
  const obj = require(filePath);
  const cls = 'default' in obj ? obj.default : obj;
  app.service.calculate = getInstance(cls, app);
}

function getInstance(Service, app) {
  let instance;
  if (is.class(Service)) {
    instance = new Service({ app });
  } 
  return instance;
}