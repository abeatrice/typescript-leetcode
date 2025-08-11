import { mySqrt } from './index.js';

type testCase = {
  x: number;
  expected: number;
};

const testCases: testCase[] = [
  { x: 4, expected: 2 },
  { x: 8, expected: 2 },
];

describe('014-sqrt', () => {
  for (const { x, expected } of testCases) {
    test(`mySqrt(${x}) should return ${expected}`, () => {
      expect(mySqrt(x)).toBe(expected);
    });
  }
});
