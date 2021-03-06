const { chunkyMonkey } = require('../solutions/03-chunky-monkey');

describe('tests/03-chunky-monkey.test.js', () => {
  test('chunkyMonkey should be a function', () => {
    expect(typeof chunkyMonkey === 'function').toBe(true);
  });
  test('chunkyMonkey should not throw an error', () => {
    expect(() => chunkyMonkey([23, 12, 50], 1)).not.toThrow();
  });
  test('chunkyMonkey should return an array', () => {
    expect(Array.isArray(chunkyMonkey([23, 12, 34], 2))).toBe(true);
  });
  test('chunkyMonkey should return an array of arrays', () => {
    let allArrays = true;
    const arr = chunkyMonkey([23, 12, 34], 2); const
      len = arr.length;
    for (let i = 0; i < len; i += 1) {
      if (Array.isArray(arr[i]) === false) {
        allArrays = false;
        break;
      }
    }
    expect(allArrays).toBe(true);
  });
  test('chunkyMonkey([23, 12, 34], 2) should return [[ 23, 12 ], [ 34 ]]', () => {
    expect(chunkyMonkey([23, 12, 34], 2)).toEqual(expect.arrayContaining([[23, 12], [34]]));
  });
  test('chunkyMonkey([23, 12, 34], 2)[1][0] should be 34', () => {
    expect(chunkyMonkey([23, 12, 34], 2)[1][0]).toBe(34);
  });
  test('chunkyMonkey([1,2,3,4,5,6], 3)[1][1] should be 5', () => {
    expect(chunkyMonkey([1, 2, 3, 4, 5, 6], 3)[1][1]).toBe(5);
  });
});
