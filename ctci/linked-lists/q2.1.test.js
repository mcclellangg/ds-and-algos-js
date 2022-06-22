const { removeDuplicates, runnerRemovedDuplicates } = require("./q2.1-removeDupes");
const { LinkedList } = require("./LinkedList");

let inputLL = new LinkedList();
let chars = ["a", "b", "d", "c", "a", "b", 1, 1, 2, 3, 1].sort();
for (let c of chars) {
  inputLL.insertFirst(c);
}

// Need separate one for runner, since inputLL will be altered after use
let runnerLL = new LinkedList();
let runnerChars = ["a", "b", "d", "c", "a", "b", 1, 1, 2, 3, 1].sort();
for (let c of runnerChars) {
  runnerLL.insertFirst(c);
}

let outputLL = new LinkedList();
let uniqueChars = [...new Set(chars)].sort();
for (let c of uniqueChars) {
  outputLL.insertFirst(c);
}

// 2.1 Remove Duplicates
describe("test removing duplicates from LinkedList with and without runner", () => {
  // First Solution
  test("removes duplicated items", () => {
    expect(removeDuplicates(inputLL)).toEqual(outputLL);
  });

  // Second Solution
  test("removes duplicated items using runner", () => {
    expect(runnerRemovedDuplicates(runnerLL)).toEqual(outputLL);
  });
});
