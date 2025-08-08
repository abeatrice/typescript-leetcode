import { plusOne } from './index.js';

type testCase = {
  digits: number[];
  expected: number[];
};

const testCases: testCase[] = [
  { digits: [1,2,3], expected: [1,2,4] },
  { digits: [4,3,2,1], expected: [4,3,2,2] },
  { digits: [8,9], expected: [9,0] },
  { digits: [9], expected: [1,0] },
  { digits: [9,9], expected: [1,0,0] },
];

describe('012-plusOne', () => {
  for (const { digits, expected } of testCases) {
    test(`plusOne([${digits}]) should return [${expected}]`, () => {
      const res = plusOne(digits);
      expect(res).toStrictEqual(expected);
    });
  }
});
