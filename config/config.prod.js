'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.env = 'prod';
  config.keys = appInfo.name + '_1510997668045_730';

  config.logger = {
    level: 'DEBUG',
    // dir: '/path/to/your/custom/log/dir',
  };

  config.redis = { // 单个redis
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'pass',
      db: 1,
    },
    // 是否加载到 app 上，默认开启
    app: true,
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '',
      database: 'database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
