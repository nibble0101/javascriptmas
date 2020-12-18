const { arrayPreviousLess } = require('../solutions/18-02-array-previous-less');

describe('arrayPreviousLess()', () => {
  it('expects arrayPreviousLess to be a function', () => {
    expect(typeof arrayPreviousLess === 'function').toBe(true);
  });
  it('expects arrayPreviousLess([3, 5, 2, 4, 5]) to return [-1, 3, -1, 2, 4]', () => {
    expect(arrayPreviousLess([3, 5, 2, 4, 5])).toEqual([-1, 3, -1, 2, 4]);
  });
  it('expects arrayPreviousLess([]) to return []', () => {
    expect(arrayPreviousLess([])).toEqual([]);
  });
  it('expects arrayPreviousLess([2, 2, 2]) to return [-1, -1, -1]', () => {
    expect(arrayPreviousLess([2, 2, 2])).toEqual([-1, -1, -1]);
  });
  it('expects arrayPreviousLess([1, 2, 3, 10]) to return [-1, 1, 2, 3]', () => {
    expect(arrayPreviousLess([1, 2, 3, 10])).toEqual([-1, 1, 2, 3]);
  });
  it('expects arrayPreviousLess([5, 3, 2]) to return [-1, -1, -1]', () => {
    expect(arrayPreviousLess([5, 3, 2])).toEqual([-1, -1, -1]);
  });
  it('expects arrayPreviousLess([5, 3, "2"]) to throw an error', () => {
    expect(() => arrayPreviousLess([5, 3, '2'])).toThrow(new Error('Invalid input'));
  });
  it('expects arrayPreviousLess([0]) to return [-1]', () => {
    expect(arrayPreviousLess([0])).toEqual([-1]);
  });
  it('expects arrayPreviousLess(false) to throw an error', () => {
    expect(() => arrayPreviousLess(false)).toThrow(new Error('Invalid input'));
  });
});
