'use strict';

module.exports = app => {
  // app.io.route('chat', app.io.controllers.chat.ping);

  app.io.of('/chat').route('chat', app.io.controllers.chat.index);
};
