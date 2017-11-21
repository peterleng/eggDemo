'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class PublicController extends Controller {
  async upload() {
    try {
      const ctx = this.ctx;
      const stream = await ctx.getFileStream();

      const date = new Date();
      let filepath = 'upload/' + date.getFullYear() + '/' + (parseInt(date.getMonth()) + 1) + '/' + date.getDate();
      const dirpath = path.join(__dirname, './../../public/', filepath);
      if (!fs.existsSync(dirpath)) {
        await this.ctx.mkdirsSync(dirpath);
      }

      let name = Math.random().toString(16).substr(2);
      name += path.extname(stream.filename);
      filepath = filepath + '/' + name;

      const dirfullpath = path.join(dirpath, name);

      const ws = await fs.createWriteStream(dirfullpath);
      await stream.pipe(ws);

      this.ctx.jsonSuccess({
        url: this.app.config.res_host + filepath,
        value: filepath,
      });
    } catch (err) {
      this.ctx.logger.error(err.errors || err.message);
      this.ctx.jsonError(err.message, err.code);
    }
  }
}

module.exports = PublicController;
