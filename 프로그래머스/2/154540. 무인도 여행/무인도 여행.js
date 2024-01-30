function solution(maps) {
    var answer = [];
    maps = maps.map(e=>e.split(''))
    const visited = maps.map(e=>e.map(i=>0))
    const [width, height] = [maps[0].length, maps.length]
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    const bfs = (a,b) => {
        let cnt = Number(maps[a][b]);
        const queue = [];
        visited[a][b] = 1
        queue.push([a,b])
        while(queue.length>0){
            const [x,y] = queue.shift();
            for(let i=0; i<4; i++){
                const [nx,ny] = [x+dx[i],y+dy[i]];
                if(nx < 0 || ny < 0 || nx >= height || ny >= width) continue;
                if(!visited[nx][ny] && maps[nx][ny] !== "X"){
                    visited[nx][ny] = 1;
                    queue.push([nx,ny])
                    cnt += Number(maps[nx][ny])
                }
            }
        }
        return cnt
    }

    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(maps[i][j] !== "X" && !visited[i][j]){
                answer.push(bfs(i,j))
            }
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b)
}