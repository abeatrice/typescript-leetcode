import { mergeTwoLists } from './index.js';
import { ListNode, listToArray, arrayToList } from '../common/ListNode';

type testCase = {
  list1: ListNode | null;
  list2: ListNode | null;
  expected: ListNode | null;
};

const testCases: testCase[] = [
  {
    list1: arrayToList([1,2,4]),
    list2: arrayToList([1,3,4]),
    expected: arrayToList([1,1,2,3,4,4]),
  },
  {
    list1: null,
    list2: null,
    expected: null,
  },
  {
    list1: null,
    list2: arrayToList([0]),
    expected: arrayToList([0]),
  },
  {
    list1: arrayToList([1]),
    list2: null,
    expected: arrayToList([1]),
  },
];

describe('006-mergeTwoLists', () => {

  test(`arrayToList should be the same as listToArray`, () => {
    const inputArray = [1, 2, 3];
    const list = arrayToList([...inputArray]);
    const outputArray = listToArray(list);

    expect(outputArray).toEqual(inputArray);
  });

  for (const { list1, list2, expected } of testCases) {
    test(`mergeTwoLists(${listToArray(list1)}, ${listToArray(list2)}) should return ${listToArray(expected)}`, () => {
      const result = mergeTwoLists(list1, list2);
      expect(listToArray(result)).toEqual(listToArray(expected));
    });
  }
});
