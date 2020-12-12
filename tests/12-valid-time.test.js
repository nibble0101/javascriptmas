const { validTime } = require('../solutions/12-valid-time');

describe('tests/12-valid-time.test.js', () => {
  test('expect validTime to be a function', () => {
    expect(typeof validTime === 'function').toBe(true);
  });
  test('expect validTime not to throw an error', () => {
    expect(() => validTime('11:59')).not.toThrow();
  });
  test('expect validTime(\'03:10\') to return boolean', () => {
    expect(typeof validTime('03:10') === 'boolean').toBe(true);
  });
  test('expect validTime(\'03:10\') to return true', () => {
    expect(validTime('03:10')).toBe(true);
  });
  test('expect validTime(\'24:00\') to return false', () => {
    expect(validTime('24:00')).toBe(false);
  });
  test('expect validTime(\'00:00\') to return true', () => {
    expect(validTime('00:00')).toBe(true);
  });
  test('expect validTime(\'12:60\') to return false', () => {
    expect(validTime('12:60')).toBe(false);
  });
  test('expect validTime(\'25:51\') to return false', () => {
    expect(validTime('25:51')).toBe(false);
  });
  test('expect validTime(\'02:76\') to return false', () => {
    expect(validTime('02:76')).toBe(false);
  });
  test('expect validTime(\'13:58\') to return true', () => {
    expect(validTime('13:58')).toBe(true);
  });
  test('expect validTime(\' 13: 58 \') to return true', () => {
    expect(validTime(' 13: 58 ')).toBe(true);
  });
  test('expect validTime(\'13:58.6\') to return false', () => {
    expect(validTime('13:58.6')).toBe(false);
  });
});
