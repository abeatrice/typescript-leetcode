import { merge } from './index.js';

type testCase = {
  nums1: number[];
  m: number;
  nums2: number[];
  n: number;
  expected: number[];
};

const testCases: testCase[] = [
  { 
    nums1: [1,2,3,0,0,0],
    m: 3,
    nums2: [2,5,6],
    n: 3,
    expected: [1,2,2,3,5,6]
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1]
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1]
  },
];

describe('017-merge', () => {
  for (const { nums1, m, nums2, n, expected } of testCases) {
    test(`merge([${nums1}], ${m}, [${nums2}], ${n}) should update nums to [${expected}]`, () => {
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    });
  }
});
