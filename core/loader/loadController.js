/**
 * load controller to app
 */

const path = require('path');
const is = require('is-type-of');
import utils from '../utils/';

export default function load(app) {
  app.controller = {};
  const filePath = path.join('../../', 'app/controller/home.js');
  const obj = require(filePath);
  const cls = 'default' in obj ? obj.default : obj;
  // 把 controller class 中的 方法拿出来
  app.controller.home = bindThis(wrapClass(cls), { app });
}

// Controller Class --> { fn1: function(){xx}, fn2: xx }
function wrapClass(Controller) {
  let proto = Controller.prototype;
  const ret = {};
  // tracing the prototype chain
  while (proto !== Object.prototype) {
    const keys = Object.getOwnPropertyNames(proto);
    for (const key of keys) {
      // getOwnPropertyNames will return constructor
      // that should be ignored
      if (key === 'constructor') {
        continue;
      }
      // skip getter, setter & non-function properties
      const d = Object.getOwnPropertyDescriptor(proto, key);
      // prevent to override sub method
      if (is.function(d.value) && !ret.hasOwnProperty(key)) {
        ret[key] = methodToMiddleware(Controller, key);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return ret;

  function methodToMiddleware(Controller, key) {
    return function classControllerMiddleware(...args) {
      const ctx = args[0];
      ctx.app = this.app;
      const controller = new Controller(ctx);
      if (!this.app.config.controller || !this.app.config.controller.supportParams) {
        args = [ this ];
      }
      return utils.callFn(controller[key], args, controller);
    };
  }
}

function bindThis(obj, that) {
  for(const k in obj) {
    if(is.function(obj[k]))
    obj[k] = obj[k].bind(that);
  }
  return obj;
}