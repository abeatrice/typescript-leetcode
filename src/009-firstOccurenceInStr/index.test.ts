import { firstOccurenceInStr } from './index.js';

type testCase = {
  haystack: string;
  needle: string;
  expected: number;
};

const testcases: testCase[] = [
  { haystack: "sadbutsad", needle: "sad", expected: 0 },
  { haystack: "leetcode", needle: "leeto", expected: -1 },
  { haystack: "", needle: "empty", expected: -1 },
  { haystack: "empty", needle: "", expected: -1 },
  { haystack: "short", needle: "longer", expected: -1 },
  { haystack: "same", needle: "same", expected: 0 },
  { haystack: "tsss", needle: "ss", expected: 1 },
  { haystack: "ttsss", needle: "t", expected: 0 },
];

describe('009-firstOccurenceInStr', () => {
  for (const { haystack, needle, expected } of testcases) {
    test(`firstOccurenceInStr(${haystack}, ${needle}) should return ${expected}`, () => {
      expect(firstOccurenceInStr(haystack, needle)).toBe(expected);
    });
  }
});
