import { lengthOfLastWord } from './index.js';

type testCase = {
  s: string;
  expected: number;
};

const testCases: testCase[] = [
  { s: "Hello World", expected: 5 },
  { s: "   fly me   to   the moon  ", expected: 4 },
  { s: "luffy is still joyboy", expected: 6 },
  { s: "one", expected: 3 },
  { s: "one ", expected: 3 },
  { s: " one ", expected: 3 },
  { s: " one", expected: 3 },
  { s: "a", expected: 1 },
];

describe('011-lengthOfLastWord', () => {
  for (const { s, expected } of testCases) {
    test(`lengthOfLastWord(${s}) should return ${expected}`, () => {
      expect(lengthOfLastWord(s)).toBe(expected);
    });
  }
});
