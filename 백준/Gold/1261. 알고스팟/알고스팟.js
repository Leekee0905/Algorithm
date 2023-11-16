let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [n, m] = input.shift().split(" ").map(Number);
  const table = input.map((e) => e.split("").map(Number));
  const visited = Array.from(Array(m), () => Array(n).fill(0));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  visited[0][0] = 1;
  queue.push([0, 0, 0]);

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    if (x === m - 1 && y === n - 1) {
      return cnt;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

      if (table[nx][ny] === 0 && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        queue.unshift([nx, ny, cnt]);
        // 최대한 0인쪽으로 가야하기 때문에 우선순위를 주려고 unshift함
      }
      if (table[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
};

console.log(solution(input));