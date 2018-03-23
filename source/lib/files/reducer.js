module.exports = name => {
  return `const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '${name.toUpperCase()}_ACTION': {
      return state;
    }

    default: {
      return state;
    }
  }
};
`;
};
