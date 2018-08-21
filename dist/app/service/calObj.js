"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  length: function length(r) {
    return 2 * Math.PI * r;
  },
  area: function area(r) {
    return r * r * Math.PI;
  },
  volume: function volume() {
    return 4 / 3 * Math.pow(r, 3) * Math.PI;
  }
};