const input = require('fs').readFileSync('/dev/stdin').toString().split('')
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const arr = Array(26).fill(-1);
for(let i=0; i<alphabet.length; i++){
  arr[i]=input.indexOf(alphabet[i]);
}

console.log(arr.join(' '));