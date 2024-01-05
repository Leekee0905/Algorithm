const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const computers = Number(input[0]);
const graphInput = input.slice(2);
const visited = new Array(computers + 1).fill(0);
const graph = new Array(computers + 1);
let virus = 0;
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < graphInput.length; i++) {
  const [from, to] = graphInput[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((e) => {
  e.sort((a, b) => a - b);
});

const DFS = (v) => {
  if (visited[v]) return;
  visited[v] = 1;
  if (v !== 1) {
    virus++;
  }

  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
};
DFS(1);
console.log(virus);
