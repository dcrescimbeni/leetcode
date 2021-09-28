/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = [...digits];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i] += 1;
      return arr;
    } else {
      arr[i] = 0;
      if (arr[i - 1] === undefined) {
        arr.unshift(1);
      }
    }
  }
  return arr;
};

console.log(plusOne([1, 1]));
console.log(plusOne([1, 2]));
console.log(plusOne([1, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
