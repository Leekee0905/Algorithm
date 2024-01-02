const input = Number(require('fs').readFileSync('/dev/stdin').toString());

const dp = Array.from({ length: input + 1 }, () => Array(10).fill(0));
let result = 0;

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= input; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j - 1 >= 0) {
      dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % 1000000000;
    }
    if (j + 1 <= 9) {
      dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}

for (let i = 0; i <= 9; i++) {
  result = (result + dp[input][i]) % 1000000000;
}

console.log(result);
