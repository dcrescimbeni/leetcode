/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // add
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }
    // close
    if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
console.log(isValid('([)]'));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('{[]}'));
