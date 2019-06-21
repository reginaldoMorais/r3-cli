const showLoading = () => {
  return {
    type: 'LOADING_SHOW',
  };
};

const hideLoading = () => {
  return {
    type: 'LOADING_HIDE',
  };
};

export { showLoading, hideLoading };
