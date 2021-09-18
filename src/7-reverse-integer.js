/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const signedMin = -2147483648;
  const signedMax = 2147483647;

  const newArray = [];
  let string = x.toString();
  let sign = '';
  let end = 0;

  if (string[0] === '-') {
    sign = '-';
    end = 1;
  }
  newArray.push(sign);

  for (let i = string.length - 1; i > end - 1; i--) {
    newArray.push(string[i]);
  }

  let reversedString = newArray.join('');
  let reversedInt = parseInt(reversedString);

  if (reversedInt > signedMax || reversedInt < signedMin) {
    return 0;
  }

  return parseInt(reversedInt);
};

console.log(reverse(10));
console.log(reverse(-10));
console.log(reverse(0));
console.log(reverse(635461231));
console.log(reverse(-7651));
console.log(reverse(-2147483649));
