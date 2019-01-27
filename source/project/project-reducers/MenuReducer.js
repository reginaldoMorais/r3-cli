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
      const newState = { ...state };
      const pageId = action.payload;

      newState.items.forEach(item => {
        item.active = false;
      });

      newState.items.forEach(item => {
        if (item.id === pageId) {
          item.active = true;
        }
      });

      return newState;
    }

    case 'SET_DASHBOARD_ACTIVATED': {
      const newState = { ...state };

      newState.items.forEach(item => {
        item.active = false;
      });

      newState.items.forEach(item => {
        if (item.id === 'dashboard') {
          item.active = true;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
