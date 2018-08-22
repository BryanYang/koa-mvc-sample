

const path = require('path');

export default (app) => {
  const p = path.join(process.cwd(), 'config','plugin.js');
  const plugins = require(p);

  app.plugins = plugins;
  const enabledPlugins = {};
  for(const p in plugins) {
    if(plugins[p].enable) {
      enabledPlugins[p] = plugins[p];
    }
  }
  app.enabledPlugins = enabledPlugins;
}