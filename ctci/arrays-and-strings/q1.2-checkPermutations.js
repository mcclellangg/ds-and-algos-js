// 1.2 Check Permutations
/*
  Given two strings write a method to check if one is a permutation of the other.
  This solution assumes that case does not matter.
*/
function isPermutation(string1, string2) {
  // This solution is constrained by the sorting algorithm
  // consider using hashMaps?
  if (string1.length !== string2.length) {
    return false;
  }
  // Large Constraint
  string1 = [...string1].sort().join("");
  string2 = [...string2].sort().join("");

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPermutation;
