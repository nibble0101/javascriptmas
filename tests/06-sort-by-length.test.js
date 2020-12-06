const { sortByLength } = require('../solutions/06-sort-by-length');

describe('tests/06-sort-by-length.test.js', () => {
  test('expect sortByLength to be a function', () => {
    expect(typeof sortByLength === 'function').toBe(true);
  });
  test('expect sortByLength not to throw an error', () => {
    expect(() => sortByLength(['abc', '', 'aaa', 'a', 'zz'])).not.toThrow();
  });
  test('expect sortByLength to return an array', () => {
    expect(Array.isArray(sortByLength(['abc', '', 'aaa', 'a', 'zz']))).toBe(true);
  });
  test('expect sortByLength to return correct values', () => {
    expect(sortByLength(['abc', '', 'aaa', 'a', 'zz'])[0]).toBe('');
  });
  test('expect sortByLength to return correct values', () => {
    expect(sortByLength(['abc', '', 'aaa', 'a', 'zz'])[4]).toBe('aaa');
  });
});
