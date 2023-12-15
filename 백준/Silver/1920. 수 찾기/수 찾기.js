const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, A, M, B] = input.map((e) => e.split(' ').map(Number));
const array = new Set(A);
const result = B.map((e) => (array.has(e) ? 1 : 0));
console.log(result.join('\n'));
