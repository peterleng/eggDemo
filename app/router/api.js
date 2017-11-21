'use strict';

module.exports = app => {
  app.get('api.index', '/api', 'api.index.index');
};
