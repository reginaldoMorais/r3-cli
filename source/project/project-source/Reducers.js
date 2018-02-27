import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as burgerMenu } from 'redux-burger-menu';

/** Reducers */
import MenuReducer from 'Templates/menu/MenuReducer';
import CommonReducer from './CommonReducer';

const rootReducer = combineReducers({
  burgerMenu,
  form: formReducer,
  toastr: toastrReducer,
  menu: MenuReducer,
  common: CommonReducer,
});

export default rootReducer;
