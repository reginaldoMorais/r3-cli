const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

module.exports = {
  app: () => {
    const app = express();
    const indexPath = path.join(__dirname, '../index.html');
    const publicPath = express.static(path.join(__dirname, '../'));

    app.get('/health', (_, res) => res.send({ status: 'OK' }));
    app.get('/resource-status', (_, res) =>
      res.send({
        createdBy: 'Node Version 6.10.3',
        applicationName: '{{APP_TITLE}}',
        implementationBuild: '20170905',
        implementationVersion: '1.1',
      })
    );

    app.use(history());
    app.use('/', publicPath);
    app.get('/', (_, res) => res.sendFile(indexPath));

    return app;
  },
};
