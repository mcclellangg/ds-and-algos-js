// 1.8 Zero Matrix
/*
  Write an algorithm such that if an element in an MXN matrix is 0, its entire row
  and column are set to 0.

  Could be improved w/ bit vector.
*/

let TEST = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 0, 9],
    [4, 5, 6, 9, 10]
];

function zeroMatrix(matrix) {
    let n = matrix.length;
    let zeroRow = Array(n).fill(false);
    let zeroCol = Array(matrix[0].length).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
               zeroRow[i] = true;
               zeroCol[j] = true;
            }
        }
    }

    for (let i = 0; i < zeroRow.length; i++) {
        if (zeroRow[i]) {
            matrix[i].fill(0);
        }
    }

    for (let j = 0; j < zeroCol.length; j++) {
        if (zeroCol[j]) {
            for (let i = 0; i < n; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

module.exports = zeroMatrix;
