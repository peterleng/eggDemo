'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.db.query(`select * from user where uid = ${uid}`);
    /* const user = await app.mysql.get('users', {
          id: 11,
      });*/
    return user;
  }
}

module.exports = UserService;
