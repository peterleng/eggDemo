'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const startTime = Date.now();
    await next();
    ctx.logger.info(ctx.request.url + ' ' + (Date.now() - startTime));
  };
};
