const { depositProfit } = require('../solutions/02-deposit-profit');

describe('tests/02-deposit-profit.test.js', () => {
    test('depositProfit should be a function', () => {
        expect(() => depositProfit(100, 20, 1700)).not.toThrow();
    })
    test('depositProfit should return a number', () => {
        expect(typeof depositProfit(100, 20, 1700)).toBe('number');
    })
    test('depositProfit should return an integer', () => {
        expect(Number.isInteger(depositProfit(1000, 20, 2100))).toBe(true);
    })
    test('depositProfit(300, 20, 746.496) should return 6', () => {
        expect(depositProfit(300, 20, 746.496)).toBe(6);
    })
})
