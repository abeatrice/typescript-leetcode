import { solve } from './index.js';

type TestCase = {
  x: number;
  expected: boolean;
};

const testCases: TestCase[] = [
  { x: 121, expected: true },
  { x: -121, expected: false },
  { x: 10, expected: false },
  { x: 101, expected: true },
  { x: 12021, expected: true },
  { x: 1221, expected: true },
  { x: -1221, expected: false },
];

describe('002-isPalindrome', () => {
  for (const { x, expected } of testCases) {
    test(`isPalindrome(${x}) should return ${expected}`, () => {
      expect(solve(x)).toBe(expected);
    });
  }
});
