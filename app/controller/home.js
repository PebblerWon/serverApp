'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    //this.ctx.body = this.app.config
    this.ctx.body = "i love yous"

    console.log(this.ctx.body.length)
  }
}

module.exports = HomeController;
