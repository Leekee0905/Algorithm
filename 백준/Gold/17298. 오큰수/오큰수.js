let [N, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

N = Number(N);
input = input.split(' ').map(Number);
const answer = Array.from({ length: N }, () => -1);
const stack = [];
for (let i = 0; i < N; i++) {
  while (stack.length && input[stack.at(-1)] < input[i]) {
    answer[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(answer.join(' '));


