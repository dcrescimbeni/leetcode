var wordPattern = function (pattern, s) {
  let j = s.split(' ');
  const hash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] !== undefined) {
      if (hash[pattern[i]] !== j[i]) {
        return false;
      }
    }
    hash[pattern[i]] = j[i];
  }
  return true;
};

function test(result, objective) {
  if (result === objective) {
    return true;
  }
  return false;
}

console.log(test(wordPattern('abba', 'dog cat cat dog'), true));
console.log(test(wordPattern('abba', 'dog cat cat fish'), false));
console.log(test(wordPattern('aaaa', 'dog cat cat dog'), false));
console.log(test(wordPattern('abba', 'dog dog dog dog'), false));
