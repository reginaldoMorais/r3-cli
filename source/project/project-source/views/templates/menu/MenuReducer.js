const MENU_INITIAL_STATE = {
  items: [
    {
      id: 'index',
      name: 'Index',
      link: '/',
      icon: 'fa-desktop',
      submenu: [],
      active: true,
      show: true,
    } /* r3-cli-menu-tag */,
  ],
};

export default (state = MENU_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MENU_ACTIVATED': {
      let newState = { ...state };
      const pageId = action.payload;

      newState.items.forEach(object => {
        object.active = false;
      });

      newState.items.forEach(object => {
        if (object.id == pageId) {
          object.active = true;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
