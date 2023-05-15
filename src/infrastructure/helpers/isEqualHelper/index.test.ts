import { isEqualHelper } from '.';

describe('isEqualHelper', () => {
  it('should return true for equal arrays', () => {
    const arr1 = ['apple', 'banana', 'orange'];
    const arr2 = ['apple', 'banana', 'orange'];

    expect(isEqualHelper(arr1, arr2)).toBe(true);
  });

  it('should return false for unequal arrays', () => {
    const arr1 = ['apple', 'banana', 'orange'];
    const arr2 = ['apple', 'grapefruit', 'orange'];

    expect(isEqualHelper(arr1, arr2)).toBe(false);
  });
});
