const { reverseAString } = require('../solutions/05-01-reverse-string');

describe('tests/05-reverse-string.test.js', () => {
  test('expect reverseAString to be a function', () => {
    expect(typeof reverseAString === 'function').toBe(true);
  });
  test('expect reverseAString not to throw  an error', () => {
    expect(() => reverseAString('hello')).not.toThrow();
  });
  test('expect reverseAString to return a string', () => {
    expect(typeof reverseAString('hello') === 'string').toBe(true);
  });
  test('expect reverseAString(hello) to return \'olleh\'', () => {
    expect(reverseAString('hello')).toBe('olleh');
  });
  test('expect reverseAString(hello world) to return \'dlrow olleh\'', () => {
    expect(reverseAString('hello world')).toBe('dlrow olleh');
  });
});
