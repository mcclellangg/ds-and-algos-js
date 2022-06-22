const { getKthToLast, getKthToLastRecursive } = require("./q2.2-getKthToLast");
const { LinkedList } = require("./LinkedList");

// Create test input
let inputLL = new LinkedList();
let nums = [100, 200, 300, 400, 500];

for (let n of nums) {
  inputLL.insertLast(n);
}

// 2.2 Return Kth to Last Element
describe("test getting kth to last element from linked list", () => {
  // Iterative Solution
  test("gets 2nd to last element (k=2)", () => {
    expect(getKthToLast(inputLL, 2)).toBe(400);
  });

  test("for null when k is out of range", () => {
    expect(getKthToLast(inputLL, 10)).toBeNull();
  });

  // Recursive Solution
  test("gets 2nd to last element recursively from head node", () => {
    const logSpy = jest.spyOn(console, "log");

    getKthToLastRecursive(inputLL.head, 2);

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenLastCalledWith(400);
  });
});
