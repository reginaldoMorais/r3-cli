import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../Routes';
import Store from '../Store';

const togglePluing = () => {
  if (process.env.NODE_ENV !== 'production') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  } else {
    return f => f;
  }
};

const { store, persistor } = Store.createClientStore(window.__INITIAL_STATE__, togglePluing());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
