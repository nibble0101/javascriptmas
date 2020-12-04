const { TestScheduler } = require('jest');
const { candies } = require('../solutions/01-candies');

test('Tests whole candies eaten', () => {
    expect(() => candies(3, 9)).not.toThrow();
    expect(candies(3, 9)).toBe(9);
})
