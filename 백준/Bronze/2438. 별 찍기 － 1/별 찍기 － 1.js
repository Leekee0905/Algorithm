let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

for(let i=0; i<num; i++){
    console.log('*'.repeat(i+1))
}