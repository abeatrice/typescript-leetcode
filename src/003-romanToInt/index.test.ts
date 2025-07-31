import { romanToInt } from './index.js';

type TestCase = {
  s: string;
  expected: number;
}

const testCases: TestCase[] = [
  { s: "III", expected: 3 },
  { s: "LVIII", expected: 58 },
  { s: "IV", expected: 4 },
  { s: "MCMXCIV", expected: 1994 },
];

describe('003-romanToInt', () => {
  for (const { s, expected } of testCases) {
    test(`romanToInt(${s}) should return ${expected}`, () => {
      expect(romanToInt(s)).toBe(expected)
    });
  }
});
