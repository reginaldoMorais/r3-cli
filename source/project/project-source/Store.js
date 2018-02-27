import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

// import { immutifyState } from '../helpers';
import reducers from './Reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default (initialState = {}, devTools = f => f) => {
  const middlewares = compose(applyMiddleware(multi, thunk, promise), devTools);
  // initialState = immutifyState(initialState);
  let store = createStore(persistedReducer, initialState, middlewares);
  let persistor = persistStore(store);
  persistor.purge();

  return { store, persistor };
};
