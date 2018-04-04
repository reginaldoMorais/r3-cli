import { action as toggleMenu } from 'redux-burger-menu';

export const activateLink = link => {
  return dispatch => {
    if (link.submenu.length > 0) {
      dispatch({ type: 'SET_MENU_ACTIVATED', payload: link.id });
    } else {
      dispatch([toggleMenu(), { type: 'SET_MENU_ACTIVATED', payload: link.id }]);
    }
  };
};

export const activateSubLink = link => {
  return dispatch => {
    dispatch([toggleMenu(), { type: 'SET_MENU_ACTIVATED', payload: link.id }]);
  };
};
