let [length, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
length = Number(length);
input = input.split(" ").map(Number);

const max_sum = (arr) => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    result = Math.max(arr[i], result);
  }
  return result;
};

console.log(max_sum(input));
