let [N, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

N = Number(N);
input = input.split(' ').map(Number);
const answer = Array.from({ length: N }, () => -1);
const stack = [];
const ngf = {};
for (let i = 0; i < input.length; i++) {
  ngf[input[i]] = (ngf[input[i]] || 0) + 1;
}

for (let i = 0; i < N; i++) {
  while (stack.length && ngf[input[stack.at(-1)]] < ngf[input[i]]) {
    answer[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(answer.join(' '));

