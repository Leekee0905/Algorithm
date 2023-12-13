const input = require('fs').readFileSync('/dev/stdin').toString();
const arr = [];
for (let i = 1; i <= input; i++) {
  arr.push(`${' '.repeat(input - i)}${'*'.repeat(2 * i - 1)}`);
}
console.log([...arr, ...arr.slice(0, -1).reverse()].join('\n'));
