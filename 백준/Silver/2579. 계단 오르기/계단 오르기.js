const [stairs, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const dp = new Array(stairs + 1).fill(0);

dp[1] = input[0];
dp[2] = dp[1] + input[1];
dp[3] = Math.max(input[0], input[1]) + input[2];

for (let i = 4; i <= stairs; i++) {
  dp[i] = Math.max(
    dp[i - 3] + input[i - 1] + input[i - 2],
    input[i - 1] + dp[i - 2],
  );
}
console.log(dp[stairs]);
