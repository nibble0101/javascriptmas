const { avoidObstacles } = require('../solutions/11-avoid-obstacles');

describe('tests/11-avoid-obstacles.test.js', () => {
  test('expect avoidObstacles to be a function', () => {
    expect(typeof avoidObstacles === 'function').toBe(true);
  });
  test('expect avoidObstacles not to throw an error', () => {
    expect(() => avoidObstacles([2, 6])).not.toThrow();
  });
  test('expect avoidObstacles([]) to throw an error', () => {
    expect(() => avoidObstacles()).toThrow();
  });
  test('expect avoidObstacles to return a number', () => {
    expect(typeof avoidObstacles([23, 12]) === 'number').toBe(true);
  });
  test('expect avoidObstacles([5, 3, 6, 7, 9]) to return 4', () => {
    expect(avoidObstacles([5, 3, 6, 7, 9])).toBe(4);
  });
  test('expect avoidObstacles([4]) to return 3', () => {
    expect(avoidObstacles([4])).toBe(3);
  });
});
