const [a, b, c, d, e, f] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

let x = (c * e - f * b) / (a * e - d * b);
let y = (c * d - f * a) / (d * b - a * e);

console.log(`${x} ${y}`);

