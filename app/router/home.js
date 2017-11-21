'use strict';

module.exports = app => {
  app.get('home.test', '/test', 'home.index.test');
  // const jsonp = app.jsonp();
  // app.get('/api/posts', jsonp, 'posts.list');
  // app.get('/api/posts', app.jsonp({ callback: 'cb' }), 'posts.list');
  app.get('home.index', '/', app.middlewares.auth(), 'home.index.index');
  app.get('home.upload', '/upload', app.middlewares.auth(), 'home.public.upload');
  app.get('home.login', '/login', 'home.user.login');
  app.post('home.ajaxlogin', '/ajaxlogin', 'home.user.ajaxLogin');
  app.get('home.logout', '/logout', 'home.user.logout');
  app.get('home.register', '/register', 'home.user.register');
  app.post('home.ajaxregister', '/ajaxregister', 'home.user.ajaxRegister');
  app.get('home.user.profile', '/profile', 'home.user.profile');
  app.post('home.user.ajaxprofile', '/ajaxprofile', 'home.user.ajaxProfile');
};
