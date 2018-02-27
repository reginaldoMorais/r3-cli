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
    },
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

    case 'SET_DASHBOARD_ACTIVATED': {
      let newState = { ...state };

      newState.items.forEach(object => {
        object.active = false;
      });

      newState.items.forEach(object => {
        if (object.id == 'dashboard') {
          object.active = true;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
