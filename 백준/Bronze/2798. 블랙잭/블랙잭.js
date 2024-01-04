const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);
const arr = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      arr.push(cards[i] + cards[j] + cards[k]);
    }
  }
}
console.log(arr.filter((e) => e <= M).sort((a, b) => b - a)[0]);
