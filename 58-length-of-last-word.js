/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
      return arr[i].length;
    }
  }
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
