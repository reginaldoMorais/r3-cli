module.exports = name => {
  return `export const action = () => {
  return { type: '${name.toUpperCase()}_ACTION' };
};
`;
};
