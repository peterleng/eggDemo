'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  /**
     * 新闻中心
     * @return {Promise.<*>} 新闻中心
     */
  async index() {
    const page = this.ctx.request.query.page || 1;
    const newsResult = await this.ctx.service.news.getHomePages(page, 15);

    return this.ctx.render('home/news/list', {
      title: 'News',
      newslist: newsResult,
    });
  }

  /**
     * 添加新闻
     * @return {Promise.<*>} 新闻
     */
  async add() {
    return this.ctx.render('home/news/add', { title: 'News' });
  }

  /**
     * 修改新闻
     * @return {Promise.<*>} 新闻
     */
  async edit() {
    const id = this.ctx.params.id;
    const newsResult = await this.ctx.service.news.find(id);

    return this.ctx.render('home/news/edit', {
      title: 'News',
      newsinfo: newsResult,
    });
  }

  /**
     * 删除
     */
  async remove() {
    try {
      const formData = this.ctx.request.body;
      const newsResult = await this.ctx.service.news.remove(formData.id);

      if (!newsResult) {
        this.ctx.throw('删除失败.');
      }

      this.ctx.jsonSuccess('删除成功');
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.jsonError(err.errors || err.message);
    }
  }

  /**
     * 保存
     */
  async save() {
    try {
      let newsResult;
      const formData = this.ctx.request.body;

      if (formData.id) {
        newsResult = await this.ctx.service.news.update(formData.id, {
          title: formData.title,
          author: formData.author,
          summary: formData.summary,
          content: formData.content,
          status: formData.status,
          update_time: new Date(),
        });
      } else {
        newsResult = await this.ctx.service.news.create({
          title: formData.title,
          author: formData.author,
          summary: formData.summary,
          content: formData.content,
          status: formData.status,
          create_time: new Date(),
          update_time: new Date(),
        });
      }

      if (!newsResult) {
        this.ctx.throw('保存失败.');
      }

      this.ctx.redirect(this.ctx.helper.pathFor('home.news'));
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.redirect(this.ctx.request.url);
    }
  }
}

module.exports = IndexController;
