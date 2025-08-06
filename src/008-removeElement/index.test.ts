import { removeElement } from './index.js';

type testCase = {
  nums: number[];
  val: number;
  expected: number;
};

const testCases: testCase[] = [
  { nums: [3,2,2,3], val: 3, expected: 2 },
  { nums: [0,1,2,2,3,0,4,2], val: 2, expected: 5 },
  { nums: [0], val: 0, expected: 0 },
  { nums: [0,0], val: 0, expected: 0 },
  { nums: [0,1], val: 0, expected: 1 },
  { nums: [1,0], val: 1, expected: 1 },
  { nums: [1,1], val: 1, expected: 0 },
  { nums: [], val: 1, expected: 0 },
];

describe('008-removeElement', () => {
  for (const { nums, val, expected } of testCases) {
    test(`removeElement([${nums}], ${val}) should return ${expected}`, () => {
      const result = removeElement(nums, val);
      expect(result).toBe(expected);
    });
  }
});
