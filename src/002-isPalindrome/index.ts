export function solve(x: number): boolean {
  const inputArray = Array.from(String(x), Number);
  for (let i = 0, j = inputArray.length - 1; i <= j; i++, j--) {
    const x = inputArray[i];
    const y = inputArray[j];
    if (x !== y) {
      return false;
    }
  }
  return true;
}
