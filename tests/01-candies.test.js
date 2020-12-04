const { TestScheduler } = require('jest');
const { candies } = require('../solutions/01-candies');

test('candies()', () => {
    expect(() => candies(3, 9)).not.toThrow();
    expect(candies(3, 9)).toBe(9);
    expect(candies(2, 11)).toBe(10);
})
