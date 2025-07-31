import { twoSum } from './index.js';

describe('twoSum', () => {
  it('finds indices of two numbers that add to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('returns empty array if no solution found', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
