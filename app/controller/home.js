'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //this.ctx.body = this.app.config
    this.ctx.body = "<h1>i love you ^_^</h1>"
  }
}

module.exports = HomeController;
