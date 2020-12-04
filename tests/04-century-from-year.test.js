const { centuryFromYear } = require('../solutions/04-century-from-year');

describe('tests/04-century-from-year.test.js', () => {
    test('centuryFromYear should be a function', () => {
        expect(typeof centuryFromYear === 'function').toBe(true);
    })
    test('centuryFromYear should not throw an error', () => {
        expect(() => centuryFromYear(2000)).not.toThrow();
    })
    test('centuryFromYear should return a number', () => {
        expect(typeof centuryFromYear(1999)).toBe('number');
    })
    test('centuryFromYear should return an integer', () => {
        expect(Number.isInteger(centuryFromYear(2021))).toBe(true);    
    })
    test('Expect centuryFromYear(1) to be 1', () => {
        expect(centuryFromYear(1)).toBe(1);
    })
    test('Expect centuryFromYear(2001) to be 21', () => {
        expect(centuryFromYear(2001)).toBe(21);
        
    })
})
