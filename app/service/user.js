'use strict';

const BaseService = require('./base');

class UserService extends BaseService {

  constructor(ctx) {
    super(ctx);
    this.table = 'user';
  }

  async login(uname, password) {
    const user = await this.app.mysql.get(this.table, {
      name: uname,
      password,
    });
    return user;
  }

  async register(data) {
    return await this.create(data);
  }

  async findByName(name) {
    const user = await this.app.mysql.get(this.table, {
      name,
    });
    return user;
  }


  async findByEmail(email) {
    const user = await this.app.mysql.get(this.table, {
      email,
    });
    return user;
  }

}

module.exports = UserService;
