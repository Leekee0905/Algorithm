const [input, ...triangle] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = triangle.map((e) => e.split(' ').map(Number));
for (let i = 1; i < input; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (j === 0) {
      arr[i][j] += arr[i - 1][j];
    } else if (j === arr[i].length - 1) {
      arr[i][j] += arr[i - 1][j - 1];
    } else {
      arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    }
  }
}
console.log(Math.max(...arr[input-1]));
