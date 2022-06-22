zeroMatrix = require("./q1.8-zeroMatrix");

const testMatrix = [
  [1, 2, 3, 4],
  [4, 0, 6, 4],
  [7, 8, 9, 0],
];

const answerMatrix = [
  [1, 0, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

// 1.8 Zero Matrix
describe("zeroMatrix function", () => {
  test("if a matrix element is 0, changes rows and columns to 0", () => {
    expect(zeroMatrix(testMatrix)).toEqual(answerMatrix);
  });
});
