function solution(maps) {
    let start = [];
    let lever = [];
    const maps2 = maps.map(item => item.split(''));  
    const maps3 = maps.map(item => item.split('')); 
    
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[i].length; j++) {
            if(maps[i][j] === "S") start = [i,j];
            else if(maps[i][j] === "L") lever = [i,j]
        }
    }
    
    const bfs = (start, arr, target) => {
        let time = 0;                 
        const dx = [1, -1, 0, 0];     
        const dy = [0, 0, 1, -1];
        const queue = [start];         
        const n = arr.length;          
        const m = arr[0].length;
        arr[start[0]][start[1]] = 'X'; 

        while(queue.length > 0) {

            let size = queue.length;
            for(let i=0; i<size; i++) {
                const [x, y] = queue.shift();

                for(let j=0; j<4; j++) {
                    let nx = x + dx[j];
                    let ny = y + dy[j];

                    if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
                        if(arr[nx][ny] === target) {
                             return time+1;
                        } 
                        queue.push([nx, ny]);
                        arr[nx][ny] = 'X';
                    }
                }
            }
            time++;
        }
        return -1;
    }
    
    const a = bfs(start, [...maps2], "L");
    const b = bfs(lever, [...maps3], "E");

    if(a === -1 || b === -1) return -1

    return a+b;
}

