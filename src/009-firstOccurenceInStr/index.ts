export function firstOccurenceInStr(haystack: string, needle: string): number {
  if (haystack.length == 0 || needle.length == 0 || needle.length > haystack.length) return -1;
  if (haystack == needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    let found = false;
    
    let j = i, k = 0;
    while (haystack[j] == needle[k] && k < needle.length) {
      if (k == needle.length - 1) {
        found = true;
      }
      j++;
      k++;
    }

    if (found) return i;
  }

  return -1;
};
