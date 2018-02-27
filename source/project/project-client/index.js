import React from 'react';
import ReactDOM from 'react-dom';
//import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//import promise from 'redux-promise';
//import multi from 'redux-multi';
//import thunk from 'redux-thunk';

//import reducers from '../source/Reducers';
import Routes from '../source/Routes';
import conpose from '../source/Store';

const togglePluing = () => {
  if (process.env.NODE_ENV === 'development') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  } else {
    return undefined;
  }
};

const devTools = togglePluing();

//const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);
const { store, persistor } = conpose({}, devTools);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById('wrapper')
);
