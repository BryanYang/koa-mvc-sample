'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  var router = app.router,
      controller = app.controller;

  router.get('/', controller.home.index);
};