const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ').map(Number);

const chess = [1, 1, 2, 2, 2, 8];
console.log(input.map((e, i) => chess[i] - e).join(' '));
