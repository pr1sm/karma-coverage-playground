import { expect } from 'chai';

describe('test add (es5)', () => {
  it('adds numbers', () => {
    const res = window.addEs5(2, 3);
    expect(res).to.equal(5, '2 + 3 should be 5');
  });

  it('adds equal numbers', () => {
    const res = window.addEs5(2, 2);
    expect(res).to.equal(4, '2 + 2 should be 4');
  });
});
