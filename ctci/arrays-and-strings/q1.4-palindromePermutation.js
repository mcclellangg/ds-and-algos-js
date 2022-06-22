// 1.4 Palindrome Permutation
/*
  Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase
  that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does
  not need to be limited to just dictionary words.

  EX: taco cat is a palindrome and tact coa is a permutation of that.

  TIPS: Consider the following description of a palindrome: a phrase with where all characters have even counts,
  or all even and one odd count (depending on length of the phrase)
*/
function palindromePermutation(s) {
  // normalize the input
  s = s
    .replace(/\s+/g, "")
    .split("")
    .map((n) => n.toLowerCase());

  let charMap = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  // Create count of even characters
  let counts = Object.values(charMap).filter((c) => c % 2 !== 0);

  if (s.length % 2 === 0) {
    // all chars must be even
    return counts.length == 0;
  } else {
    return counts.length == 1;
  }
}

module.exports = palindromePermutation;
