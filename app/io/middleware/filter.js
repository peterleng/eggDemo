'use strict';

module.exports = () => {
  return function* (ctx, next) {
    this.socket.emit('res', 'packet received!');
    console.log('packet:', this.packet);

    yield* next;
  };
};
