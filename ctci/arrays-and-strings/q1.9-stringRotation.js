// 1.9 String Rotation
/*
   Assume you have a method isSubstring which checks if one word is a substring
   of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of si using only one
   call to isSubstring [e.g. "waterbottle" is a rotation of "erbottlewat"]

   Constraints:
   - assuming all input will be lowercase
   - using .includes method instead of isSubstring
*/

function isStringRotation(s1, s2) {
    let len = s1.length;

    if (len == s2.length && len > 0) {
        let containsRotation = s1 + s1;
        return containsRotation.includes(s2);
    }

    return false;
}

module.exports = isStringRotation;
