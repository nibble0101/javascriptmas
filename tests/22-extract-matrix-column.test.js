const { extractMatrixColumn } = require('../solutions/22-extract-matrix-column');

const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;
const result = [1, 0, 3];

describe('tests/22-extract-matrix-column.test.js', () => {
  test('expect extractMatrixColumn to be a function', () => {
    expect(typeof extractMatrixColumn === 'function').toBe(true);
  });
  test('expect extractMatrixColumn not to throw an error', () => {
    expect(() => extractMatrixColumn(matrix, column)).not.toThrow();
  });
  test(`expect extractMatrixColumn(${JSON.stringify(column)}, ${column}) to return an array`, () => {
    expect(Array.isArray(extractMatrixColumn(matrix, column))).toBe(true);
  });
  test(`expect extractMatrixColumn(${JSON.stringify(column)}, ${column}) to return ${JSON.stringify(result)}`, () => {
    expect(extractMatrixColumn(matrix, column)).toEqual(result);
  });
  test(`expect extractMatrixColumn(${JSON.stringify(column)}, 0) to return [1, 0, 2]`, () => {
    expect(extractMatrixColumn(matrix, 0)).toEqual([1, 0, 2]);
  });
  test(`expect extractMatrixColumn(${JSON.stringify(matrix)}, 3) to return [2, 4, 6]`, () => {
    expect(extractMatrixColumn(matrix, 3)).toEqual([2, 4, 6]);
  });
});
