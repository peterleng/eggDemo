'use strict';

// 内置插件
exports.static = true;
exports.onerror = false;

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

/*
exports.mysql = {
  enable: false,
  package: 'egg-mysql',
};
*/

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.sessionRedis = {
  enable: true,
  // egg-sequelize
  package: 'egg-session-redis',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

/*
默认开启的
exports.security = {
    xframe: {
        enable: false,
    },
};*/
