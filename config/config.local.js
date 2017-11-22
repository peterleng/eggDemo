'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.env = 'local';
  config.keys = 'cookies_secret_key';
  config.res_host = '/public/';// http://test.com/

  config.logger = {
    level: 'DEBUG',
    // dir: '/path/to/your/custom/log/dir',
  };

  config.mysql = {
    client: {
      host: '10.0.4.8',
      port: '33066',
      user: 'root',
      password: 'CenturyQWERT',
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.redis = { // 单个redis
    clients: {
      session: {
        port: 6379, // Redis port
        host: '10.0.4.49', // Redis host
        password: '123456',
        db: 1,
      },
      cache: {
        port: 6379, // Redis port
        host: '10.0.4.49', // Redis host
        password: '123456',
        db: 2,
      },
    },
    agent: true,
  };

  exports.io = {
    redis: {
      host: '10.0.4.49',
      port: 6379,
      auth_pass: '123456',
      db: 2,
    },
  };


  return config;
};
