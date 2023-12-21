let input = require('fs').readFileSync('/dev/stdin').toString();
let count = Number(input);
let cnt = 0;
let answer = [];
const fib = (n) => {
  if (n === 1 || n === 2) {
    cnt++;
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const fibonacci = (n) => {
  const array = new Array(count + 1).fill(0);
  array[1] = array[2] = 1;
  for (let i = 3; i <= n; i++) {
    cnt++;
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
};
fib(count);
answer.push(cnt);
cnt = 0;

fibonacci(count);
answer.push(cnt);
cnt = 0;
console.log(answer.join(' '));
