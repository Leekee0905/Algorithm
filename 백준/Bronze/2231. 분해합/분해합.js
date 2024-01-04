const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
const arr = [];
for (let i = 1; i <= N; i++) {
  const M = i.toString();
  const digit = M.split('').map(Number);
  let sum = 0;
  for (let j = 0; j < digit.length; j++) {
    sum += digit[j];
  }
  sum += Number(M);
  if (sum === N) {
    arr.push(M);
  }
}
console.log(arr.length === 0 ? 0 : Math.min(...arr));


