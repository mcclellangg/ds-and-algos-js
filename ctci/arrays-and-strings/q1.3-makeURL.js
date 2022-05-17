// 1.3 URLify
/*
  Write a method to replace all spaces in a string with '%20'. You may assume that the string
  has sufficient space at the end to hold the additional characters, and that you are given the "true"
  length of the string.
*/

function makeURL(s) {
    let result = "";
    let replace = "%20";

    for (char in s) {
        if (s[char] == " ") {
            result += replace;
        } else {
            result += s[char];
        }
    }

    return result;
}

module.exports = makeURL;
