export function mySqrt(x: number): number {
  const bigX = BigInt(x);
  if (x < 2) return x;
  let left = 0n, right = bigX / 2n;
  while (left <= right) {
    const mid = (left + right) / 2n;
    const curr = mid * mid;
    const next = (mid + 1n) * (mid + 1n);
    if (curr === bigX || (curr < bigX && next > bigX)) {
      return Number(mid);
    }

    if (curr < bigX) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  return Number(left);
};
