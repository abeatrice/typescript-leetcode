export function searchInsert(nums: number[], target: number): number {
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    const k = Math.floor((i + j) / 2);
    if (nums[k] === target) {
      return k;
    } else if (nums[k] < target) {
      i = k + 1;
    } else {
      j = k - 1;
    }
  }
  return i;
};
