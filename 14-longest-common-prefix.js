/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonArray = [];

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return commonArray.join('');
      }
    }
    commonArray.push(strs[0][i]);
  }

  return commonArray.join('');
};

console.log(longestCommonPrefix(['test', 'tesa', 'teaaaa', 'teaasa']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
