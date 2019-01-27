import reducer from '../MenuReducer';

describe('MenuReducer', () => {
  describe('Selected Services', () => {
    it('Store must be updated with active=true for the link selected by user. Other links must be setted as false', () => {
      const initialState = {
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
          {
            id: 'contact',
            name: 'Contact',
            link: '/contact',
            icon: 'fa-desktop',
            submenu: [],
            active: false,
            show: true,
          },
        ],
      };

      const action = {
        type: 'SET_MENU_ACTIVATED',
        payload: 'contact',
      };

      const state = reducer(initialState, action);

      expect(state.items[0].active).toBe(false);
      expect(state.items[1].active).toBe(true);
    });
  });
});
