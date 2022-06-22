// String Compressor
/*
  Implement a method to perform basic string compression using the counts
  of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
  "compressed" string would not become smaller than the original string, your method should return
  the original string. You can assume the string has only uppercase and lowercase letters (a - z).

  Clarify questions/ assumptions:
  - Assuming it is sorted
*/

function stringCompressor(s) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (next == curr) {
      count++;
      continue;
    } else {
      compressed += curr + count;
      count = 1;
    }
  }

  return s.length > compressed.length ? compressed : s;
}

module.exports = stringCompressor;
