'use strict';

const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '1m', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
      disable: true, // 本地开发环境不执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.curl('http://www.api.com/cache', {
      method: 'POST',
      dataType: 'json',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      timeout: 3000,
      data: {
        hello: 'world',
        now: Date.now(),
      },
    });
    this.ctx.app.cache = res.data;
  }
}

module.exports = UpdateCache;
