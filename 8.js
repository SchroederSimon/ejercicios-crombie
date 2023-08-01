function solution(matrix) {
  let sum = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] > 0) {
        sum += matrix[i][j];
      } else {
        break;
      }
    }
  }
  return sum;
}
// For
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

console.log(
  solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
