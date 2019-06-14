import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../Store';
import Routes from '../Routes';
import template from './template';

module.exports = {
  app: () => {
    const app = express();
    const env = process.env.NODE_ENV || 'development';
    const isServer = true;
    const devTools = f => f;

    app.get('/health', (_, res) => res.send({ status: 'OK' }));

    app.get('/resource-status', (_, res) =>
      res.send({
        createdBy: 'Node Version 10.15.3',
        applicationName: 'EXAMPLE',
        implementationBuild: '201905',
        implementationVersion: '1.1',
      })
    );

    app.use('/assets', express.static('./'));

    app.get('*', (req, res) => {
      const store = configureStore({}, devTools, isServer);
      const context = {};

      const appWithRouter = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Routes />
          </StaticRouter>
        </Provider>
      );

      if (context.url) {
        res.redirect(context.url);
        return;
      }

      const html = ReactDOMServer.renderToString(appWithRouter);
      const initialState = store.getState();

      res.status(200).send(template(html, initialState, env));
    });

    return app;
  },
};
