isPermutation = require("./q1.2-checkPermutations");

// 1.2 isPermutation
describe("isPermutation function", () => {
    test("abc is a permutation of cba", () => {
        expect(isPermutation("abc", "cba")).toBe(true);
    });

    test("abc is NOT a permutation of sakfjasdfjlk", () => {
        expect(isPermutation("abc", "sakfjasdfjlk")).toBe(false);
    });
});
