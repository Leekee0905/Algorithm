const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, A, M, B] = input.map((e) => e.split(' ').map(Number));
const map = new Map();

A.map((e) => {
  if (!map[e]) {
    map[e] = 1;
  } else {
    map[e]++;
  }
});

console.log(B.map((e) => (map[e] ? map[e] : 0)).join('\n'));
