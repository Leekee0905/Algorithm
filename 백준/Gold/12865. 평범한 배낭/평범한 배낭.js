const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const [N, K] = input[0];
const weight = input.slice(1);

const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  const [W, V] = weight[i - 1];
  for (let j = 1; j < K + 1; j++) {
    if (j - W >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}
console.log(dp[N][K]);
