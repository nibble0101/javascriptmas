const { chunkyMonkey } = require('../solutions/03-chunky-monkey');

describe('tests/03-chunky-monkey.test.js', () => {
    test('chunkyMonkey should be a function', () => {
        expect(() => chunkyMonkey([23, 12, 50], 1)).not.toThrow();
    })
    test('chunkyMonkey should return an array', () => {
        expect(Array.isArray(chunkyMonkey([23, 12, 50], 1))).toBe(true);
    })
    test('chunkyMonkey should return an array of arrays', () => {
        expect(Array.isArray(chunkyMonkey([23, 12, 34], 2)[0])).toBe(true);
    })
    test('chunkyMonkey([23, 12, 34], 2)[1][0] should be 34', () => {
        expect(chunkyMonkey([23, 12, 34], 2)[1][0]).toBe(34);
    })
    test('chunkyMonkey([1,2,3,4,5,6], 3)[1][1] should be 5', () => {
        expect(chunkyMonkey([1,2,3,4,5,6], 3)[1][1]).toBe(5);
    })

})
