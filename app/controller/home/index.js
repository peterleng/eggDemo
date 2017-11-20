'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async test() {
    const createRule = {
      title: { type: 'string' },
      content: { type: 'string' },
    };

    try {
    // 校验参数
      // 如果不传第二个参数会自动校验 `ctx.request.body`
      this.ctx.validate(createRule);
      // 组装参数
      // const count = this.ctx.cookies.get('count');
      const author = this.ctx.session.userId;
      const req = Object.assign(this.request.body, { author });
      // 调用 service 进行业务处理
      const res = await this.service.post.create(req);

      // 设置响应内容和响应状态码
      this.body = { id: res.id };
      this.status = 201;
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.body = { success: false };
      return;
    }
  }
}

module.exports = IndexController;
