function twoSum2(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (hash[difference] !== undefined) {
      return [hash[difference], i];
    }
    hash[nums[i]] = i;
  }
  return [];
}

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
console.log(twoSum2([2, 5, 5, 11], 10));
