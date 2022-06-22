palindromePermutation = require("./q1.4-palindromePermutation");

// 1.4 palindromePermutation
describe("palindromePermutation function", () => {
  test("Tact Coa is permutation of taco cat", () => {
    expect(palindromePermutation("Tact Coa")).toBe(true);
  });

  test("Foo Donkey is NOT a permutation of a palindrome", () => {
    expect(palindromePermutation("Foo Donkey")).toBe(false);
  });

  test("onno is a permutation of noon", () => {
    expect(palindromePermutation("onno")).toBe(true);
  });
});
