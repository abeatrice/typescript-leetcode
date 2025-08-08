export function lengthOfLastWord(s: string): number {
  let start = s.length - 1;
  while (s[start] == ' ') {
    start--
  }
  for (let i = start; i >= 0; i--) {
    if (s[i] == ' ') {
      return start - i;
    }
  }
  return start+1;
}
