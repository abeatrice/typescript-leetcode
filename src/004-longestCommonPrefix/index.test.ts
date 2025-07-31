import { longestCommonPrefix } from './index.js';

type TestCase = {
  strs: string[];
  expected: string;
};

const testCases: TestCase[] = [
  { strs: ["flower","flow","flight"], expected: 'fl' },
  { strs: ["dog", "racecar", "car"], expected: '' },
  { strs: ["ranger", "rangerDave", "rangerJohn"], expected: 'ranger' },
  { strs: ["cir","car"], expected: 'c' },
];

describe('004-longestCommonPrefix', () => {
  for (const { strs, expected } of testCases) {
    test(`longestCommonPrefix(${strs}) should return ${expected}`, () => {
      expect(longestCommonPrefix(strs)).toBe(expected);
    });
  }
});
