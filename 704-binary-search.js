var search = function (nums, target) {
  function recFunc(nums, target, index) {
    const middle = Math.floor(nums.length / 2) ;
    if(nums[middle] === target) {
      return index;
    }

    
    
    recFunc(array, target, index);



    // const middle = Math.floor(nums.length / 2);
    // console.log(nums.length);
    // if (nums.length === 1) {
    //   if (nums[middle] === target) {
    //     return nums[middle];
    //   }
    //   return false;
    // } else {
    //   if (nums[middle] < target) {
    //     const start = middle + 1;
    //     const end = nums.length;
    //     return search(nums.slice(start, end), target);
    //   } else {
    //     const start = 0;
    //     const end = middle;
    //     return search(nums.slice(start, end), target);
    //   }
    // }
  }
};

function test(result, objective) {
  if (result === objective) {
    return true;
  }
  return false;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
