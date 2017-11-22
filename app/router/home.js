'use strict';

module.exports = app => {
  app.get('home.test', '/test', 'home.index.test');
  // const jsonp = app.jsonp();
  // app.get('/api/posts', jsonp, 'posts.list');
  // app.get('/api/posts', app.jsonp({ callback: 'cb' }), 'posts.list');
  app.get('home.index', '/', app.middlewares.auth(), 'home.index.index');
  app.post('home.upload', '/upload', app.middlewares.auth(), 'home.public.upload');
  app.get('home.login', '/login', 'home.user.login');
  app.post('home.ajaxlogin', '/ajaxlogin', 'home.user.ajaxLogin');
  app.get('home.logout', '/logout', 'home.user.logout');
  app.get('home.register', '/register', 'home.user.register');
  app.post('home.ajaxregister', '/ajaxregister', 'home.user.ajaxRegister');
  app.get('home.user.profile', '/profile', app.middlewares.auth(), 'home.user.profile');
  app.post('home.user.ajaxprofile', '/ajaxprofile', app.middlewares.auth(), 'home.user.ajaxProfile');

  app.get('home.news', '/news', 'home.news.index');
  app.get('home.news.add', '/news/add', app.middlewares.auth(), 'home.news.add');
  app.get('home.news.edit', '/news/edit/:id', app.middlewares.auth(), 'home.news.edit');
  app.post('home.news.remove', '/news/remove', app.middlewares.auth(), 'home.news.remove');
  app.post('home.news.save', '/news/save', app.middlewares.auth(), 'home.news.save');

    app.get('home.chat', '/chatroom', 'home.chat.index');
};
