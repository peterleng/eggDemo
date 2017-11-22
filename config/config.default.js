'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.env = 'prod';

  // cookie加密key
  config.keys = 'cookies_secret_key';
  config.res_host = '';// http://test.com/

  exports.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  config.logger = {
    level: 'DEBUG',
    // dir: '/path/to/your/custom/log/dir',
  };

  exports.session = {
    key: 'EGG_SESS',
    maxAge: 2 * 3600 * 1000, // 2小时
    httpOnly: true,
    encrypt: true,
  };

  exports.sessionRedis = {
    name: 'session', // specific instance `session` as the session store
  };

  // 默认语言
  exports.i18n = {
    defaultLocale: 'zh-CN',
  };

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'report', 'locals' ];

  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
    // match: '/static',
    // ignore:''
  };

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.bodyParser = {
    enable: true,
    jsonLimit: '2mb',
    formLimit: '8mb',
  };

  config.multipart = {
    fileSize: '2mb',
    fileExtensions: [ '.apk' ], // 增加对 .apk 扩展名的支持
    // whitelist: [ '.png' ], // 覆盖整个白名单，只允许上传 '.png' 格式
  };

  config.jsonp = {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    csrf: true,
    whiteList: '.test.com', // []
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

  config.redis = { // 单个redis
    clients: {
      session: {
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: 'pass',
        db: 1,
      },
      cache: {
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: 'pass',
        db: 2,
      },
    },
    agent: true,
  };

  exports.io = {
    init: {
      path: '/chat',
      cookie: true,
    }, // passed to engine.io
    namespace: {
      '/chat': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  return config;
};
