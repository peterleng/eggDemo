'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  /**
   * 登录页
   * @return {Promise.<*>} 页面
   */
  async login() {
    return this.ctx.render('home/user/login', { title: 'Login' });
  }


  /**
   * 登录提交
   */
  async ajaxLogin() {
    const createRule = {
      userName: { type: 'string' },
      password: { type: 'string' },
    };

    try {
      this.ctx.validate(createRule, this.ctx.request.body);
      // 调用 service 进行业务处理
      const res = await this.ctx.service.user.login(this.ctx.request.body.userName, this.ctx.request.body.password);

      if (res.id) {
        const session = this.ctx.session;
        session.isLogin = true;

        session.user = {
          id: res.id,
          email: res.email,
          name: res.name,
          nick: res.nick,
          icon: res.icon,
        };
      } else {
        this.ctx.throw('登录失败.');
      }

      this.ctx.jsonSuccess(res);
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.jsonError(err.errors || err.message);
    }
  }

  /**
   * 注册页
   * @return {Promise.<*>} 注册页
   */
  async register() {
    return this.ctx.render('home/user/register', { title: 'Register' });
  }

  /**
   * 注册提交
   */
  async ajaxRegister() {
    const createRule = {
      userName: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
      nick: { type: 'string' },
      confirmPassword: { type: 'string' },
      remark: { type: 'string' },
    };

    try {
      const formData = this.ctx.request.body;
      this.ctx.validate(createRule, formData);
      // 调用 service 进行业务处理
      const uid = await this.ctx.service.user.register({
        email: formData.email,
        password: formData.password,
        name: formData.userName,
        nick: formData.nick,
        remark: formData.remark || '',
        level: 1,
        create_time: new Date(),
        update_time: new Date(),
      });

      if (uid <= 0) {
        this.ctx.throw('注册失败.');
      }

      const session = this.ctx.session;
      session.isLogin = true;

      session.user = {
        id: uid,
        email: formData.email,
        name: formData.name,
        nick: formData.nick,
      };

      this.ctx.jsonSuccess('注册成功');
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.jsonError(err.errors || err.message);
    }
  }

  /**
   * 退出
   */
  async logout() {
    try {
      this.ctx.session = null;

      this.ctx.jsonSuccess('退出成功');
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.jsonError(err.message, err.code);
    }
  }
}

module.exports = IndexController;
