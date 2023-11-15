let [N,...map] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
map = map.map(e=>e.trim().split('').map(Number))
const visited = Array.from({length:Number(N)},()=> new Array(Number(N)).fill(0));

const apart = [];
const dx = [1,-1,0,0];
const dy = [0,0,1,-1];

const bfs = (x,y) => {
  let cnt = 1;
  const queue = [[x,y]];
  visited[x][y] = 1
  while(queue.length){
    const size = queue.length;
    for(let i=0; i<size; i++){
      const [x,y] = queue.shift();
      for(let j=0; j<4; j++){
        const [nx,ny] = [x+dx[j],y+dy[j]];
        if(0 <= nx && nx < N && 0 <= ny && ny < N && map[nx][ny] === 1 && !visited[nx][ny]){
          visited[nx][ny] = 1;
          queue.push([nx,ny]);
          cnt++
        }
      }
    }
    
  }
  apart.push(cnt)
}

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(visited[i][j] === 0 && map[i][j] === 1){
      bfs(i,j)
    }
  }
}


console.log(`${apart.length}\n${apart.sort((a,b)=>a-b).join('\n')}`);