let [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
N = Number(N);
input = input.map((e) => e.trim().split(' ').map(Number));
let dp = Array.from(Array(Number(N + 1)), () => Array(3).fill(0));

dp[1] = input[0];

for (let i = 2; i <= N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i - 1][2];
}

console.log(Math.min(...dp[N]));
