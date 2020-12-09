const { sumOddFibonacciNumbers } = require('../solutions/09-sum-odd-fibonacci-numbers');

describe('tests/09-sum-odd-fibonacci-numbers.test.js', () => {
  test('expect sumOddFibonacciNumbers to be a function', () => {
    expect(typeof sumOddFibonacciNumbers === 'function').toBe(true);
  });
  test('expect sumOddFibonacciNumbers not to throw an error', () => {
    expect(() => sumOddFibonacciNumbers(20)).not.toThrow();
  });
  test('expect sumOddFibonacciNumbers to return a number', () => {
    expect(typeof sumOddFibonacciNumbers(5) === 'number').toBe(true);
  });
  test('expect sumOddFibonacciNumbers(2) to return 2', () => {
    expect(sumOddFibonacciNumbers(2)).toBe(2);
  });
  test('expect sumOddFibonacciNumbers(10) to return 10', () => {
    expect(sumOddFibonacciNumbers(10)).toBe(10);
  });
  test('expect sumOddFibonacciNumbers(1000) to return 1785', () => {
    expect(sumOddFibonacciNumbers(1000)).toBe(1785);
  });
  test('expect sumOddFibonacciNumbers(4000000) to return 4613732', () => {
    expect(sumOddFibonacciNumbers(4000000)).toBe(4613732);
  });
});
