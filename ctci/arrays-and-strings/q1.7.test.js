rotateMatrix = require("./q1.7-rotateMatrix");
const testMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const answerMatrix = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6 ,3]
];

// 1.7 Rotate Matrix
describe("rotateMatrix function", () => {
    test("rotates testMatrix 90 degrees", () => {
        expect(rotateMatrix(testMatrix)).toEqual(answerMatrix)
    });
});
