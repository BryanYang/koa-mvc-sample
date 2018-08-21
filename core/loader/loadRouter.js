/**
 * load controller to app
 */

const path = require('path');
export default function load(app) {
  const filePath = path.join('../../', 'app/router.js');
  const router = require(filePath);
  router.default(app);
}