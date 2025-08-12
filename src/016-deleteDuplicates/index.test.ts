import { deleteDuplicates } from './index.js';
import { ListNode, listToArray, arrayToList } from '../common/ListNode';

type testCase = {
  head: ListNode | null;
  expected: ListNode | null;
};

const testCases: testCase[] = [
  {
    head: arrayToList([1,1,2]),
    expected: arrayToList([1,2]),
  },
  {
    head: arrayToList([1,1,2,3,3]),
    expected: arrayToList([1,2,3]),
  },
];

describe('016-deleteDuplicates', () => {
  for (const { head, expected } of testCases) {
    test(`deleteDuplicates(${listToArray(head)}) should return ${listToArray(expected)}`, () => {
      const result = deleteDuplicates(head);
      expect(listToArray(result)).toEqual(listToArray(expected));
    });
  }
});
