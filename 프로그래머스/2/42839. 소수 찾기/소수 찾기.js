function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

function generateNumbers(str, used, current, primeSet) {
  if (current.length > 0) {
    const num = Number(current.join(""));
    primeSet.add(num);
  }
  for (let i = 0; i < str.length; i++) {
    if (!used[i]) {
      used[i] = true;
      current.push(str[i]);
      generateNumbers(str, used, current, primeSet);
      current.pop();
      used[i] = false;
    }
  }
}

// 주어진 문자열에서 소수 개수 찾기
function solution(str) {
  const primeSet = new Set();
  generateNumbers(str.split(""), Array(str.length).fill(false), [], primeSet);

  let count = 0;
  for (const num of primeSet) {
    if (isPrime(num)) count++;
  }

  return count;
}