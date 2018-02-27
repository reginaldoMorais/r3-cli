const showLoadingBar = () => {
  return {
    type: 'LOADING_SHOW',
  };
};

const hideLoadingBar = () => {
  return {
    type: 'LOADING_HIDE',
  };
};

export { showLoadingBar, hideLoadingBar };
