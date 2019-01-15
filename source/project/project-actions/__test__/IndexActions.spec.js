import { action } from '../IndexActions';

describe('IndexAction action()', () => {
  it('Returns action INDEX_ACTION without payload.', () => {
    const result = action();

    expect(result.type).toEqual('INDEX_ACTION');
    expect(result.payload).toBeUndefined();
  });
});
