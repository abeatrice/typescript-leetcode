/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 * @param s 
 * @returns {boolean} true | false
 */
export function isValidParentheses(s: string): boolean {
  const getOpenBracket = {
    ')': '(',
    '}': '{',
    ']': '[',
  } as const;
  const openBrackets = Object.values(getOpenBracket);

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i] as keyof typeof getOpenBracket;
    if (openBrackets.includes(bracket as (typeof openBrackets)[number])) {
      stack.push(bracket);
    } else if (getOpenBracket[bracket] == stack[stack.length-1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length == 0) return true;
  return false;
};
