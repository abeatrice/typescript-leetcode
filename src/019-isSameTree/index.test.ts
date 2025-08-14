import { isSameTree } from './index.js';
import { TreeNode, arrayToTree, treeToArray } from "../common/TreeNode";

type TestCase = {
  p: TreeNode | null;
  q: TreeNode | null;
  expected: boolean;
};

const testCases: TestCase[] = [
  { p: arrayToTree([1,2,3]), q: arrayToTree([1,2,3]), expected: true },
  { p: arrayToTree([1,2]), q: arrayToTree([1,null,2]), expected: false },
  { p: arrayToTree([1,2,1]), q: arrayToTree([1,1,2]), expected: false },
];

describe('019-isSameTree', () => {
  for (const { p, q, expected } of testCases) {
    test(`isSameTree([${treeToArray(p)}], [${treeToArray(q)}]) should return ${expected}`, () => {
      expect(isSameTree(p, q)).toBe(expected);
    });
  }
});
