const { chunkyMonkey } = require('../solutions/03-chunky-monkey');

test('chunkyMonkey()', () => {
    expect(() => chunkyMonkey([23, 12, 50], 1)).not.toThrow();
    expect(Array.isArray(chunkyMonkey([23, 12, 34], 2)[0])).toBe(true);
    expect(chunkyMonkey([23, 12, 34], 2)[1][0]).toBe(34);
    expect(chunkyMonkey([1,2,3,4,5,6], 3)[1][1]).toBe(5);
})