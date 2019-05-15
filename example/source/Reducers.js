import { combineReducers } from 'redux';

/* Libs Reducers */
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as burgerMenu } from 'redux-burger-menu';

/* Reducers */
import IndexReducer from './reducers/IndexReducer';
import MenuReducer from './reducers/MenuReducer';
import LoadingBarReducer from './reducers/LoadingBarReducer';
import SettingsReducer from './reducers/SettingsReducer';

const rootReducer = combineReducers({
  index: IndexReducer,
  menu: MenuReducer,
  loadingBar: LoadingBarReducer,
  settings: SettingsReducer,
  form: formReducer,
  toastr: toastrReducer,
  burgerMenu,
});

export default rootReducer;
