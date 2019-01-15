import { combineReducers } from 'redux';

/* Libs Reducers */
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as burgerMenu } from 'redux-burger-menu';

/* Reducers */
import MenuReducer from './reducers/MenuReducer';
import LoadingBarReducer from './reducers/LoadingBarReducer';
import AppReducer from './reducers/AppReducer';

const rootReducer = combineReducers({
  menu: MenuReducer,
  loadingBar: LoadingBarReducer,
  app: AppReducer,
  form: formReducer,
  toastr: toastrReducer,
  burgerMenu,
});

export default rootReducer;
