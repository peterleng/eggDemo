'use strict';

// 内置插件
exports.static = true;
exports.onerror = false;

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

/*
默认开启的
exports.security = {
    xframe: {
        enable: false,
    },
};*/
