const [length, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const max = Math.max(...input);
const answer = [];
const dp = new Array(100).fill(0);
dp[0] = dp[1] = dp[2] = 1;

for (let i = 3; i <= max; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < length; i++) {
  answer.push(dp[input[i] - 1]);
}

console.log(answer.join('\n'));
