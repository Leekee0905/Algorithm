const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const width = Number(input[0]);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));

const countPaper = (n) => {
  const count = [0, 0];
  const recursion = (n, x, y) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += arr[y + j][x + i];
      }
    }

    if (total === 0) {
      count[0]++;
    } else if (total === n * n) {
      count[1]++;
    } else {
      n /= 2;
      recursion(n, x, y);
      recursion(n, x + n, y);
      recursion(n, x, y + n);
      recursion(n, x + n, y + n);
    }
  };
  recursion(n, 0, 0);
  console.log(count.join('\n'));
};
countPaper(width);
