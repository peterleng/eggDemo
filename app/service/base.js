'use strict';

const Service = require('egg').Service;

class BaseService extends Service {

  constructor(ctx) {
    super(ctx);
    this.table = '';
  }

  /*
   * 查找单个
   */
  async find(id) {
    const result = await this.app.mysql.get(this.table, {
      id,
    });
    return result;
  }

  /*
   * 插入数据
   */
  async create(data) {
    const result = await this.app.mysql.insert(this.table, data);
    return result.affectedRows === 1 ? result.insertId : 0;
  }

  /*
   * 更新数据
   */
  async update(id, data) {
    const result = await this.app.mysql.update(this.table, data, {
      where: {
        id,
      },
    });
    return result.affectedRows === 1;
  }

  /*
   * 删除数据
   */
  async remove(id) {
    const result = await this.app.mysql.delete(this.table, {
      id,
    });
    return result.affectedRows === 1;
  }

  /*
   * 查询多条
   */
  async list(where, order = [[ 'id', 'desc' ]], limit = null, offset = null, columns = '*') {
    const condition = { // 搜索 post 表
      where, // WHERE 条件
      orders: order, // 排序方式
    };

    if (limit) {
      condition.limit = limit;
    }

    if (offset) {
      condition.offset = offset;
    }

    if (columns !== '*' && Array.isArray(columns)) {
      condition.columns = columns;
    }

    const results = await this.app.mysql.select(this.table, condition);
    return results;
  }

  /*
   * 事务
   */
  async transection(func) {
    const conn = await this.app.mysql.beginTransaction();
    try {
      if (typeof func === 'function') {
        func(conn);
      }
      await conn.commit(); // 提交事务
    } catch (err) {
      // error, rollback
      await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      throw err;
    }
  }
}

module.exports = BaseService;
