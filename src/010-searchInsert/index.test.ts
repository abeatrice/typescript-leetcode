import { searchInsert } from './index.js';

type testCase = {
  nums: number[],
  target: number,
  expected: number,
};

const testCases: testCase[] = [
  { nums: [1,3,5,6], target: 5, expected: 2 },
  { nums: [1,3,5,6], target: 2, expected: 1 },
  { nums: [0,5,6,7,9], target: 2, expected: 1 },
  { nums: [1,3,5,6], target: 7, expected: 4 },
  { nums: [1,2,3,4], target: 0, expected: 0 },
  { nums: [1,3], target: 2, expected: 1 },
];

describe('010-searchInsert', () => {
  for (const { nums, target, expected } of testCases) {
    test(`searchInsert([${nums}], ${target}) should return ${expected}`, () => {
      expect(searchInsert(nums, target)).toBe(expected);
    });
  }
});
