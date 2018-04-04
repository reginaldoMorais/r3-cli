export const activateLink = pageId => {
  return {
    type: 'SET_MENU_ACTIVATED',
    payload: pageId,
  };
};
