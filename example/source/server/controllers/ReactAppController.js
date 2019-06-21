import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createServerStore } from '../../Store';
import Routes from '../../Routes';
import template from '../templates/template';

class ReactAppController {
  renderApp(req, res) {
    const env = process.env.NODE_ENV || 'development';

    const store = createServerStore();
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

    const html = renderToString(appWithRouter);
    const initialState = store.getState();

    res.status(200).send(template(html, initialState, env));
  }
}

export default new ReactAppController();
