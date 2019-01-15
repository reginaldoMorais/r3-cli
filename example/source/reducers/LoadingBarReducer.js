const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_SHOW':
      return true;
    case 'LOADING_HIDE':
      return false;
    default:
      return state;
  }
};
