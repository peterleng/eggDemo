'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = 'api';
  }

  async test() {
    try {
      const createRule = {
        title: { type: 'string' },
        content: { type: 'string' },
      };
      this.ctx.validate(createRule);
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.body = { success: false };
      return;
    }
  }
}

module.exports = IndexController;
