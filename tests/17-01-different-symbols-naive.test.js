const { differentSymbolsNaive } = require('../solutions/17-01-different-symbols-naive');

describe('tests/17-01-different-symbols-naive.test.js', () => {
  test('expect differentSymbolsNaive to be a function', () => {
    expect(typeof differentSymbolsNaive === 'function').toBe(true);
  });
  test('expect differentSymbolsNaive("hello") not to throw an error', () => {
    expect(() => differentSymbolsNaive('hello')).not.toThrow('Invalid input');
  });
  test('expect differentSymbolsNaive(true) to throw an error', () => {
    expect(() => differentSymbolsNaive(true)).toThrow('Invalid input');
  });
  test('expect differentSymbolsNaive() to throw an error', () => {
    expect(() => differentSymbolsNaive()).toThrow('Invalid input');
  });
  test('expect differentSymbolsNaive("hello") to return an integer', () => {
    expect(Number.isInteger(differentSymbolsNaive('hello'))).toBe(true);
  });
  test('expect differentSymbolsNaive("cabca") to return 3', () => {
    expect(differentSymbolsNaive('cabca')).toBe(3);
  });
  test('expect differentSymbolsNaive("john.doe@gmail.com") to return 14', () => {
    expect(differentSymbolsNaive('john.doe@gmail.com')).toBe(14);
  });
  test('expect differentSymbolsNaive("https://www.scrimba.com?test=hoho") to be 18', () => {
    expect(differentSymbolsNaive('https://www.scrimba.com?test=hoho')).toBe(18);
  });
});
