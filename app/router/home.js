'use strict';

module.exports = app => {
  // const jsonp = app.jsonp();
  // app.get('/api/posts', jsonp, 'posts.list');
  // app.get('/api/posts', app.jsonp({ callback: 'cb' }), 'posts.list');
  app.get('/', 'home.index.index');
  app.get('/upload', 'home.public.upload');
  app.get('/test', 'home.index.test');
};
