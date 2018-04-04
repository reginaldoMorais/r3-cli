import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Middlewares */
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

/* Reducers */
import reducers from './Reducers';

const createServerStore = initialState => {
  const middlewares = compose(applyMiddleware(multi, thunk, promise));
  return createStore(reducers, initialState, middlewares);
};

const createClientStore = (initialState, devTools) => {
  const persistConfig = { key: 'root', storage };
  const persistedReducer = persistReducer(persistConfig, reducers);
  const middlewares = compose(applyMiddleware(multi, thunk, promise), devTools);

  let store = createStore(persistedReducer, initialState, middlewares);
  let persistor = persistStore(store);
  persistor.purge();

  return { store, persistor };
};

export default (initialState = {}, devTools = f => f, isServer = false) => {
  if (isServer) {
    return createServerStore(initialState);
  } else {
    return createClientStore(initialState, devTools);
  }
};
