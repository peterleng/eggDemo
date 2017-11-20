'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.env = 'local';
  config.keys = appInfo.name + '_1510997668045_730';

  config.logger = {
    level: 'DEBUG',
    // dir: '/path/to/your/custom/log/dir',
  };

  config.redis = { // 单个redis
    client: {
      port: 6379, // Redis port
      host: '10.0.4.49', // Redis host
      password: '123456',
      db: 1,
    },
    // 是否加载到 app 上，默认开启
    app: true,
  };

  config.mysql = {
    client: {
      host: '10.0.4.8',
      port: '33066',
      user: 'root',
      password: 'CenturyQWERT',
      database: 'database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
