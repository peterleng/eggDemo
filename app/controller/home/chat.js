'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  /**
     * 聊天室
     * @return {Promise.<*>} 聊天室
     */
  async index() {
    return this.ctx.render('home/chat/index', {
      title: 'Chat',
    });
  }
}

module.exports = IndexController;
