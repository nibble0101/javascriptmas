const { countVowelConsonant } = require('../solutions/07-count-vowel-consonants');

describe('tests/07-count-vowel-consonants.test.js', () => {
  test('expect countVowelConsonant to be a function', () => {
    expect(typeof countVowelConsonant === 'function').toBe(true);
  });
  test('expect countVowelConsonant not to throw an error', () => {
    expect(() => countVowelConsonant('aeiou')).not.toThrow();
  });
  test('expect countVowelConsonant to return a number', () => {
    expect(typeof countVowelConsonant('hello') === 'number').toBe(true);
  });
  test('expect countVowelConsonant to return an integer', () => {
    expect(Number.isInteger(countVowelConsonant('hoho'))).toBe(true);
  });
  test('expect countVowelConsonant("abcde") to return 8', () => {
    expect(countVowelConsonant('abcde')).toBe(8);
  });
});
