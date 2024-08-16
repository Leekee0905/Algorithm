function solution(board) {
    let answer = -1;
    let queue = []
    const n = board.length;
    const m = board[0].length;
    const visited = board.map(e=>e.split("").map(ele=>ele=0))
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    board = board.map(e=>e.split(""))
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === 'R'){
                queue.push([i,j,0])
                visited[i][j] = 1
            }
        }
    }
    while (queue.length) {
        const [x, y, count] = queue.shift();
        
        if (board[x][y] === "G") {
            answer = count;
            break;
        }
        
        for (let i=0; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            while(0<=nx && nx<n && 0<=ny && ny<m && board[nx][ny] !== "D") {
                nx += dx[i]
                ny += dy[i]   
            }
            nx -= dx[i];
            ny -= dy[i];
            
            if (visited[nx][ny] === 0) {
                queue.push([nx, ny, count+1]);
                visited[nx][ny] = 1
            }
        }
    }
    return answer;
}