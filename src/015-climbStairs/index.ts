type Ways = Record<number, number>;

export function climbStairs(n: number): number {
  const ways: Ways = {
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i-1] + ways[i-2];
  }

  return ways[n];
};
