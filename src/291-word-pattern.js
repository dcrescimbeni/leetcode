const wordPattern2 = function (pattern, s) {
  const j = s.split(' ');
  hash = {};

  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] === undefined) {
      const hashKeys = Object.keys(hash);
      for (let k = 0; k < hashKeys.length; k++) {
        console.log(hashKeys[k], pattern[i]);
        if (hash[hashKeys[k]] === j[i] && hashKeys[k] !== pattern[i]) {
          return false;
        }
      }
      hash[pattern[i]] = j[i];
    }
  }

  let result = [];
  for (let m = 0; m < pattern.length; m++) {
    result.push(hash[pattern[m]]);
  }
  const joinedResult = result.join(' ');
  if (joinedResult !== s) {
    return false;
  }

  return true;
};

const wordPattern = function (pattern, s) {
  const hashPattern = {};
  const wordPattern = {};
  const tokens = s.split(' ');
  if (pattern.length !== tokens.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (hashPattern[pattern[i]] !== undefined) {
      if (wordPattern[tokens[i]] !== pattern[i]) {
        return false;
      }
    } else {
      // No existe, crearlo
      hashPattern[pattern[i]] = tokens[i];
      if (wordPattern[tokens[i]] !== undefined) {
        // La palabra existe
        if (wordPattern[tokens[i]] !== pattern[i]) {
          return false;
        }
      } else {
        // No existe, crearla
        wordPattern[tokens[i]] = pattern[i];
      }
    }
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
