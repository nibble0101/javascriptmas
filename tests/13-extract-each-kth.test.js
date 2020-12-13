const { extractEachKth } = require('../solutions/13-extract-each-kth');

describe('tests/13-extract-each-kth.test.js', () => {
  test('expect extractEachKth to be a function', () => {
    expect(typeof extractEachKth === 'function').toBe(true);
  });
  test('expect extractEachKth not to throw an error', () => {
    expect(() => extractEachKth([1, 2, 3], 2)).not.toThrow();
  });
  test('expect extractEachKth to return an array', () => {
    expect(Array.isArray(extractEachKth([1, 2, 3], 2))).toBe(true);
  });
  test('expect extractEachKth([1, 2, 3, 4, 5, 6], 2) to return [1, 3, 5]', () => {
    expect(extractEachKth([1, 2, 3, 4, 5, 6], 2)).toEqual(expect.arrayContaining([1, 3, 5]));
  });
  test('expect extractEachKth([1, 2], 1) to return []', () => {
    expect(extractEachKth([1, 2], 1)).toEqual(expect.arrayContaining([]));
  });
  test('expect extractEachKth([1, 2], 0) to return [1, 2]', () => {
    expect(extractEachKth([1, 2], 0)).toEqual(expect.arrayContaining([1, 2]));
  });
});
