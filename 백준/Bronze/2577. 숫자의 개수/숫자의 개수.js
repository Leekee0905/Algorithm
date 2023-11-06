const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e=>Number(e))
const string = input.reduce((acc,curr)=>acc*curr).toString()
const arr = Array(10).fill(0)
const number = '0123456789'

for(let i=0; i<string.length; i++){
  arr[number.indexOf(string[i])]++
}

console.log(arr.join('\n'))