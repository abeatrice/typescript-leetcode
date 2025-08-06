import { removeDuplicates } from './index.js';

type testCase = {
  nums: number[];
  expected: number;
};

const testCases: testCase[] = [
  { nums: [1,1,2], expected: 2 },
  { nums: [1,2,3], expected: 3 },
  { nums: [0,0,1,1,1,2,2,3,3,4], expected: 5 },
];

describe('007-removeDuplicates', () => {
  for (const { nums, expected } of testCases) {
    test(`removeDuplicates(${nums}) should return ${expected}`, () => {
      expect(removeDuplicates(nums)).toBe(expected);
    });
  }  
});
