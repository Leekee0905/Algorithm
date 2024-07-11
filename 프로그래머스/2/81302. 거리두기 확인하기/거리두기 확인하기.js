function solution(places) {
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];

    const bfs = (map) => {
        const room = map.map(e=>e.split(""))
        const queue = [];
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(room[i][j] === 'P'){
                    queue.push([i,j])
                }
            }
        }
        while(queue.length){
            const [x,y] = queue.shift()
            for(let i=0; i<4; i++){
                const [nx,ny] = [dx[i]+x, dy[i]+y]
                if(nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
                if(room[nx][ny] === 'X') continue;
                if(room[nx][ny] === "P") return 0;
                
                for(let j=0; j<4; j++){
                    const [nnx, nny] = [nx + dx[j], ny + dy[j]];
                    if(nnx < 0 || nny < 0 || nnx >= 5 || nny >= 5) continue;
                    if(nnx === x && nny === y) continue;
                    if(room[nnx][nny] === "P") return 0;
                }
            }
        }
        return 1
    }
    return places.map(e=>bfs(e));
}