/**
 * get the longest common prefix string amongst an array of strings,
 * if no common prefix, return an empty string
 * @param strs array of string inputs
 * @returns longest common prefix
 */
export function longestCommonPrefix(strs: string[]): string {
  let res: string = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    let sameChar = true;
    for (let j = 1; j < strs.length; j++) {
      const nChar = strs[j][i];
      if (char !== nChar) {
        sameChar = false;
      }
    }
    if (!sameChar) {
      return res;
    }
    res = res + char
  }

  return res;
}
