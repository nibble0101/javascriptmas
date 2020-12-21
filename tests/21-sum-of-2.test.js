const { sumOfTwo } = require('../solutions/21-sum-of-2');

const nums1 = [1, 2, 3];
const nums2 = [10, 20, 30, 40];
const nums3 = [12, 34];
const value = 42;

describe('tests/21-sum-of-2.test.js', () => {
  test('expect sumOfTwo to be a function', () => {
    expect(typeof sumOfTwo === 'function').toBe(true);
  });
  test('expect sumOfTwo not to throw an error', () => {
    expect(() => sumOfTwo([1, 2], [1, 3], 20)).not.toThrow();
  });
  test('expect sumOfTwo to return a boolean', () => {
    expect(typeof sumOfTwo([1, 2], [1, 3], 20) === 'boolean').toBe(true);
  });
  test(`expect sumOfTwo(${JSON.stringify(nums1)}, ${JSON.stringify(nums2)}, ${JSON.stringify(value)}) to return true`, () => {
    expect(sumOfTwo(nums1, nums2, value)).toBe(true);
  });
  test(`expect sumOfTwo(${JSON.stringify(nums1)}, ${JSON.stringify(nums3)}, ${JSON.stringify(value)}) to return false`, () => {
    expect(sumOfTwo(nums1, nums3, value)).toBe(false);
  });
});
