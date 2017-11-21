'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get('user-agent'));
  },

  get isAndroid() {
    const iosReg = /android/i;
    return iosReg.test(this.get('user-agent'));
  },

  get isAjax() {
    return this.request.get('X-Requested-With') === 'XMLHttpRequest';
  },

  jsonSuccess(data, code = 200) {
    this.body = {
      code,
      success: true,
      data,
    };
  },

  jsonError(msg, code = 500) {
    this.body = {
      code,
      success: false,
      message: msg,
    };
  },

  mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
      return true;
    }
    if (this.mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  },

};
