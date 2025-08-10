import { addBinary } from './index.js';

type testCase = {
  a: string,
  b: string,
  expected: string
};

const testCases: testCase[] = [
  { a: '11', b: '1', expected: '100' },
  { a: '1010', b: '1011', expected: '10101' },
  { a: '1', b: '1', expected: '10' },
  { a: '1', b: '0', expected: '1' },
  { a: '0', b: '0', expected: '0' },
  { a: '0', b: '1', expected: '1' },
  { a: '1', b: '11', expected: '100' },
  { a: '1111', b: '1111', expected: '11110' },
];

describe('013-addBinary', () => {
  for (const { a, b, expected } of testCases) {
    test(`addBinary(${a}, ${b}) should return ${expected}`, () => {
      expect(addBinary(a,b)).toBe(expected);
    });
  }
});
