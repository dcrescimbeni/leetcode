/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // When it's negative, it's not a palindrome
  if (x < 0 || x > 2147483647) {
    return false;
  }

  if (typeof x !== 'number') {
    return false;
  }

  let stringNumber = x.toString();

  let l = 0;
  let r = stringNumber.length - 1;

  while (l < r) {
    if (stringNumber[l] !== stringNumber[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(10));
console.log(isPalindrome(9889));
console.log(isPalindrome(654321));
console.log(isPalindrome(-101));
console.log(isPalindrome('test'));
