stringCompressor = require("./q1.6-stringCompressor");

// 1.6 String compression
describe("stringCompressor function", () => {
  test("aabcccccaaa compresses into a2b1c5a3", () => {
    expect(stringCompressor("aabcccccaaa")).toBe("a2b1c5a3");
  });

  test("abcdefghi does not compress", () => {
    expect(stringCompressor("abcdefghi")).toBe("abcdefghi");
  });
});
