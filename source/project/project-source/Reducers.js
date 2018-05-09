import { combineReducers } from 'redux';

/* Libs Reducers */
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as burgerMenu } from 'redux-burger-menu';

/* Reducers */
import MenuReducer from './view/templates/menu/MenuReducer';
import LoadingBarReducer from './view/templates/loadingBar/LoadingBarReducer';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  menu: MenuReducer,
  loadingBar: LoadingBarReducer,
  app: AppReducer,
  form: formReducer,
  toastr: toastrReducer,
  burgerMenu,
});

export default rootReducer;
