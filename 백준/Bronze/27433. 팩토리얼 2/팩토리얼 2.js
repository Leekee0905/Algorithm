const input = Number(require('fs').readFileSync('/dev/stdin').toString());
const factorial = (num) => {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
};

console.log(factorial(input));
