let input = require('fs').readFileSync('/dev/stdin').toString();
let count = Number(input);

const dp = new Array(count).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= count; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[count]);
