'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  * index() {
    // const message = this.ctx.args[0];
    console.log(this.ctx.args);
    this.ctx.socket.emit('res', 'Hi! I\'ve got your message: 111');
  }
}

module.exports = ChatController;
