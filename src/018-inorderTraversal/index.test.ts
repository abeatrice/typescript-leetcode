import { inorderTraversal } from './index.js';
import { TreeNode, arrayToTree, treeToArray } from "../common/TreeNode.js";

type TestCase = {
  root: TreeNode | null;
  expected: number[];
};

const testCases: TestCase[] = [
  { root: arrayToTree([1,null,2,3]), expected: [1,3,2] },
  { root: arrayToTree([1,2,3,4,5,null,8,null,null,6,7,9]), expected: [4,2,6,5,7,1,3,9,8] },
];

describe('018-inorderTraversal', () => {
  for (const { root, expected } of testCases) {
    test(`inorderTraversal(${treeToArray(root)}) should return [${expected}]`, () => {
      const res = inorderTraversal(root);
      expect(res).toEqual(expected);
    });
  }
});
