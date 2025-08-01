import { isValidParentheses } from './index.js';

type testCase = {
  s: string;
  expected: boolean;
};

const testCases: testCase[] = [
  { s: "()", expected: true },
  { s: "()[]{}", expected: true },
  { s: "(]", expected: false },
  { s: "([()])", expected: true },
  { s: "([)]", expected: false },
  { s: ")", expected: false },
  { s: "()(", expected: false },
  { s: "())", expected: false },
  { s: "{}{}()[]", expected: true },
];

describe('005-isValidParentheses', () => {
  for (const { s, expected } of testCases) {
    test(`isValidParentheses(${s}) should be: ${expected}`, () => {
      expect(isValidParentheses(s)).toBe(expected);
    });
  }
});
