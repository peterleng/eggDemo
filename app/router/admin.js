'use strict';

module.exports = app => {
  app.get('admin.index', '/admin', 'admin.index.index');
};
