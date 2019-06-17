import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../Store';
import Routes from '../../Routes';
import template from '../templates/template';

class ReactAppController {
  renderApp(req, res) {
    const env = process.env.NODE_ENV || 'development';
    const isServer = true;
    const devTools = f => f;

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
  }
}

export default ReactAppController;
