const { arrayMaximalAdjacentDifference } = require('../solutions/14-array-maximal-adjacent-diff');

describe('tests/14-array-maximal-adjacent-diff.js', () => {
  test('expect arrayMaximalAdjacentDifference to be a function', () => {
    expect(typeof arrayMaximalAdjacentDifference === 'function').toBe(true);
  });
  test('expect arrayMaximalAdjacentDifference([2, 1, 23]) not to throw an error', () => {
    expect(() => arrayMaximalAdjacentDifference([2, 1, 23])).not.toThrow();
  });
  test('expect arrayMaximalAdjacentDifference([]) to throw an error', () => {
    expect(() => arrayMaximalAdjacentDifference([])).toThrow('Invalid argument');
  });
  test('expect arrayMaximalAdjacentDifference("twenty") to throw an error', () => {
    expect(() => arrayMaximalAdjacentDifference('twenty')).toThrow('Invalid argument');
  });
  test('expect arrayMaximalAdjacentDifference([2, 1, 23]) to return 22', () => {
    expect(arrayMaximalAdjacentDifference([2, 1, 23])).toBe(22);
  });
  test('expect arrayMaximalAdjacentDifference([-2, -1, -23]) to be 22', () => {
    expect(arrayMaximalAdjacentDifference([-2, -1, -23])).toBe(22);
  });
  test('expect arrayMaximalAdjacentDifference([0, 0, 0]) to be 0', () => {
    expect(arrayMaximalAdjacentDifference([0, 0, 0])).toBe(0);
  });
  test('expect arrayMaximalAdjacentDifference([23]) to return 23', () => {
    expect(arrayMaximalAdjacentDifference([23])).toBe(23);
  });
});
