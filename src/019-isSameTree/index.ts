import { TreeNode } from "../common/TreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  const curr = p?.val === q?.val;
  const left = isSameTree(p?.left || null, q?.left || null);
  const right = isSameTree(p?.right || null, q?.right || null);
  return left && curr && right;
};
