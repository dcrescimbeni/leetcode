/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const symbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let numberSum = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbolValue[s[i]] < symbolValue[s[i + 1]]) {
      numberSum -= symbolValue[s[i]];
    } else {
      numberSum += symbolValue[s[i]];
    }
  }
  return numberSum;
};

function test(result, objective) {
  if (result === objective) {
    return true;
  }
  return false;
}

console.log(test(romanToInt('III'), 3));
console.log(test(romanToInt('IV'), 4));
console.log(test(romanToInt('IX'), 9));
console.log(test(romanToInt('LVIII'), 58));
console.log(test(romanToInt('MCMXCIV'), 1994));
