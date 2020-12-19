const { alphabetSubsequence } = require('../solutions/19-alphabet-subsequence');

describe('tests/19-alphabet-subsequence.test.js', () => {
  test('expect alphabetSubsequence to be a function', () => {
    expect(typeof alphabetSubsequence === 'function').toBe(true);
  });
  test('expect alphabetSubsequence not to throw an error', () => {
    expect(() => alphabetSubsequence('abc')).not.toThrow();
  });
  test('expect alphabetSubsequence to throw an error', () => {
    expect(() => alphabetSubsequence(2)).toThrow(new Error('Invalid input'));
  });
  test('expect alphabetSubsequence("aba") to return false', () => {
    expect(alphabetSubsequence('aba')).toBe(false);
  });
  test('expect alphabetSubsequence("ace") to return true', () => {
    expect(alphabetSubsequence('ace')).toBe(true);
  });
  test('expect alphabetSubsequence("cdce") to return false', () => {
    expect(alphabetSubsequence('cdce')).toBe(false);
  });
  test('expect alphabetSubsequence("effg") to return false', () => {
    expect(alphabetSubsequence('effg')).toBe(false);
  });
  test('expect alphabetSubsequence("eden") to return false', () => {
    expect(alphabetSubsequence('eden')).toBe(false);
  });
  test('expect alphabetSubsequence("This is a sentence") to return false', () => {
    expect(alphabetSubsequence('This is a sentence')).toBe(false);
  });
});
