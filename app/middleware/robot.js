'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
};

// config/config.default.js
/*
exports.middleware = [
    'robot'
];

exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};
*/
