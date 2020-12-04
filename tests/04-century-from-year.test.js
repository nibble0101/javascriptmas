const { TestScheduler } = require('jest');
const { centuryFromYear } = require('../solutions/04-century-from-year');

test('centuryFromYear()', () => {
    expect(() => centuryFromYear(2000)).not.toThrow();
    expect(typeof centuryFromYear(1999)).toBe('number');
    expect(centuryFromYear(1)).toBe(1);
    expect(centuryFromYear(2001)).toBe(21);
    expect(Number.isInteger(centuryFromYear(2021))).toBe(true);
})