const { TestScheduler } = require('jest');
const { depositProfit } = require('../solutions/02-deposit-profit');

test('depositProfit()', () => {
    expect(() => depositProfit(100, 20, 1700)).not.toThrow();
    expect(typeof depositProfit(100, 20, 1700)).toBe('number');
    expect(Number.isInteger(depositProfit(1000, 20, 2100))).toBe(true);
    expect(depositProfit(300, 20, 746.496)).toBe(6);
})