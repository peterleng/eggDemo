'use strict';

const BaseService = require('./base');

class NewsService extends BaseService {

  constructor(ctx) {
    super(ctx);
    this.table = 'news';
  }

  async getHomePages(page, pagesize) {
    const resultData = await this.list(null, [[ 'create_time', 'DESC' ]], pagesize, ((page - 1) * pagesize));
    return resultData;
  }

}

module.exports = NewsService;
