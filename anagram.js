function Anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};
  // loop through the first str and create an object that's a breakdown of the str1
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)
  // loop over the second str and compare each char to lookup object
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    // if there is a letter substract 1 
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(Anagram('anagram', 'nagaram'))