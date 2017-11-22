'use strict';

module.exports = () => {
  return function* (next) {
    // const session = this.ctx.session,
    //   isLogin = session && session.isLogin === true;
    // //
    // //   // const session = await app.redis.get(this.cookies.get('EGG_SESS', { encrypt: true }));
    // //   // console.log(JSON.parse(session));
    // //
    // if (!isLogin) {
    //   return this.socket.emit('forbidden');
    // }

    this.socket.emit('res', 'connected!');

    yield* next;
    // execute when disconnect.
    console.log('disconnect!');
  };
};
