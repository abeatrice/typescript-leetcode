import { 
  ListNode, 
  mergeTwoLists 
} from './index.js';

type testCase = {
  list1: ListNode | null;
  list2: ListNode | null;
  expected: ListNode | null;
};

const testCases: testCase[] = [
  {
    list1: new ListNode(1, new ListNode(2, new ListNode(4))),
    list2: new ListNode(1, new ListNode(3, new ListNode(4))),
    expected: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))),
  },
  {
    list1: null,
    list2: null,
    expected: null,
  },
  {
    list1: null,
    list2: new ListNode(0),
    expected: new ListNode(0),
  },
  {
    list1: new ListNode(1),
    list2: null,
    expected: new ListNode(1),
  },
];

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('006-mergeTwoLists', () => {
  for (const { list1, list2, expected } of testCases) {
    test(`mergeTwoLists(${listToArray(list1)}, ${listToArray(list2)}) should return ${listToArray(expected)}`, () => {
      const result = mergeTwoLists(list1, list2);
      expect(listToArray(result)).toEqual(listToArray(expected));
    });
  }
});
