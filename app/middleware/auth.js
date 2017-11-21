'use strict';


module.exports = () => {
  return async (ctx, next) => {
    const session = ctx.session,
      isLogin = session && session.isLogin === true;
    if (!isLogin) {
      if (ctx.isAjax) {
        ctx.response.body = ctx.jsonError('请先登录.', 423);
      } else {
        ctx.redirect('/login');
      }
      return;
    }

    await next();
  };
};
