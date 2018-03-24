module.exports = name => {
  const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { action } from '../${nameUpperCase}Actions';

describe('${nameUpperCase}Action action()', () => {
  it('Returns action ${name.toUpperCase()}_ACTION without payload.', () => {
    const result = action();

    expect(result.type).toEqual('${name.toUpperCase()}_ACTION');
    expect(result.payload).toBeUndefined();
  });
});
`;
};
