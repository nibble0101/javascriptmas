const { candies } = require('../solutions/01-candies');

describe('tests/01-candies.test.js', () => {
  test('candies should be a function', () => {
    expect(typeof candies === 'function').toBe(true);
  });
  test('candies should not throw an error', () => {
    expect(() => candies(3, 9)).not.toThrow();
  });
  test('candies should return a number', () => {
    expect(typeof candies(10, 101)).toBe('number');
  });
  test('expect candies(3, 9) to return 9', () => {
    expect(candies(3, 9)).toBe(9);
  });

  test('expect candies(2, 11) to return 10', () => {
    expect(candies(2, 11)).toBe(10);
  });
});
