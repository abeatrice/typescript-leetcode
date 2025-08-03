export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
};

export function mergeTwoLists(
  list1: ListNode | null, 
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(-1);
  let curr = dummy;
  while (list1 !== null || list2 !== null) {
    let nextVal = 0;
    if (list1 && list2) {
      nextVal = list1.val <= list2.val ? list1.val : list2.val;
      if (list1.val <= list2.val) {
        list1 = list1.next;
      } else {
        list2 = list2.next;
      }
    } else if (!list1 && list2) {
      nextVal = list2?.val;
      list2 = list2.next;
    } else if (list1 && !list2) {
      nextVal = list1.val
      list1 = list1.next;
    }
    curr.next = new ListNode(nextVal);
    curr = curr.next;
  }
  return dummy.next;
};
