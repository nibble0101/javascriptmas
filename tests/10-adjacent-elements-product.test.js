const { adjacentElementsProduct } = require('../solutions/10-adjacent-elements.product');

describe('tests/10-adjacent-elements-product.js', () => {
  test('expect adjacentElementsProduct to be a function', () => {
    expect(typeof adjacentElementsProduct === 'function').toBe(true);
  });
  test('expect adjacentElementsProduct not to throw an error', () => {
    expect(() => adjacentElementsProduct([1, 2])).not.toThrow();
  });
  test('expect adjacentElementsProduct to return a number', () => {
    expect(typeof adjacentElementsProduct([1, 2]) === 'number').toBe(true);
  });
  test('expect adjacentElementsProduct([1, 2, 200]) to return 400', () => {
    expect(adjacentElementsProduct([1, 2, 200])).toBe(400);
  });
  test('expect adjacentElementsProduct([21]) to return 21', () => {
    expect(adjacentElementsProduct([21])).toBe(21);
  });
  test('expect adjacentElementsProduct([3, 6, -2, -5, 7, 3]) to return 21', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
  });
});
