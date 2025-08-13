import { TreeNode } from "../common/TreeNode";

export function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  return [...left, root.val, ...right];
};
