import { expect } from 'chai';

import { add } from '../src/addts';

describe('test add (ts)', () => {
  it('adds numbers', () => {
    const res = add(2, 3);
    expect(res).to.equal(5, '2 + 3 should be 5');
  });

  it('adds equal numbers', () => {
    const res = add(2, 2);
    expect(res).to.equal(4, '2 + 2 should be 4');
  });
});
