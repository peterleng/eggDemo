'use strict';

module.exports = () => {
  return async (ctx, next) => {
    ctx.locals.user = ctx.session.user || null;
    await next();
  };
};
