export function addBinary(a: string, b: string): string {
  let res: string = '';

  let c = '0';
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const charA = a[i] || '0';
    const charB = b[j] || '0';
    let charRes = '0';
    if (charA == '0' && charB == '0') {
      charRes = (c == '1') ? '1' : '0';
      res = `${charRes}${res}`;
      c = '0';
    } else if (charA == '1' && charB == '1') {
      charRes = (c == '1') ? '1' : '0';
      res = `${charRes}${res}`;
      c = '1';
    } else {
      charRes = (c == '1') ? '0' : '1';
      res = `${charRes}${res}`;
      c = (c == '1') ? '1' : '0';
    }
  }
  if (c == '1') {
    res = `${c}${res}`;
  }

  return res;
};
