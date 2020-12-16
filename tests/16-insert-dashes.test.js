const { insertDashes } = require('../solutions/16-insert-dashes');

describe('tests/16-insert-dashes.test.js', () => {
  test('expect insertDashes to be a function', () => {
    expect(typeof insertDashes === 'function').toBe(true);
  });
  test('expect insertDashes not to throw an error', () => {
    expect(() => insertDashes('hello')).not.toThrow();
  });
  test('expect insertDashes to return a string', () => {
    expect(typeof insertDashes('hello') === 'string').toBe(true);
  });
  test('expect insertDashes("hello") to return "h-e-l-l-o"', () => {
    expect(insertDashes('hello')).toBe('h-e-l-l-o');
  });
  test('expect insertDashes("aba caba") to return "a-b-a c-a-b-a"', () => {
    expect(insertDashes('aba caba')).toBe('a-b-a c-a-b-a');
  });
});
