import { climbStairs } from './index.js';

type testCase = {
  n: number;
  expected: number;
};

const testCases: testCase[] = [
  { n: 1, expected: 1 },
  { n: 2, expected: 2 },
  { n: 3, expected: 3 },
  { n: 4, expected: 5 },
  { n: 5, expected: 8 },
  { n: 6, expected: 13 },
  { n: 7, expected: 21 },
];

describe('015-climbStairs', () => {
  for (const { n, expected } of testCases) {
    test(`climbStairs(${n}) should return ${expected}`, () => {
      expect(climbStairs(n)).toBe(expected);
    });
  }
});
