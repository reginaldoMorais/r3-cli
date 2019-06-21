import { combineReducers } from 'redux';

/* Libs Reducers */
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as burgerMenu } from 'redux-burger-menu';

/* Reducers */
import IndexReducer from './reducers/IndexReducer';
import MenuReducer from './reducers/MenuReducer';
import LoadingReducer from './reducers/LoadingReducer';
import SettingsReducer from './reducers/SettingsReducer';

const rootReducer = combineReducers({
  index: IndexReducer,
  menu: MenuReducer,
  loading: LoadingReducer,
  settings: SettingsReducer,
  form: formReducer,
  toastr: toastrReducer,
  burgerMenu,
});

export default rootReducer;
