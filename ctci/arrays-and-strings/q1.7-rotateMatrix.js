// 1.7 Rotate Matrix
/*
  Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method
  to rotate the image by 90 degrees. Can you do this in place?

  Input:
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  Output:
  [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  Constraints: Given an NxN (square matrix)
  Edge Cases:
*/

let testCase = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(matrix) {
  let n = matrix.length;

  // Transpose the matrix (turn rows into columns)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Reverse transposed matrix
  for (let i = 0; i < n; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
}

rotateMatrix(testCase);

module.exports = rotateMatrix;
