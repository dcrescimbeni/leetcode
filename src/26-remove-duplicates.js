/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
      k--;
    }
  }
  return k;
};

let arr = [1, 1, 2];

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
