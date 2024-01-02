const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('-');
const answer = [];
for (let i = 0; i < arr.length; i++) {
  const plus = arr[i].split('+').map(Number);
  let temp = plus.reduce((acc, curr) => acc + curr);
  answer.push(temp);
}

console.log(answer.reduce((a, b) => a - b));
