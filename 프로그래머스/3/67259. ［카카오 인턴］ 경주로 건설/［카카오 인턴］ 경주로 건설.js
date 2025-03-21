function solution(board) {
    const n = board.length
    const dx = [1, 0, -1, 0]; 
    const dy = [0, 1, 0, -1];
    const queue = []
    const costs = Array.from({length: n},()=>Array.from({length:n}, ()=> Array(4).fill(Infinity)))
    queue.push([0,0,0,0])
    queue.push([0,0,1,0])
    costs[0][0][0] = 0;
    costs[0][0][1] = 0;
    while(queue.length > 0){
        const [row,col,dir,cost] = queue.shift();
        if(cost > costs[row][col][dir]) continue;
        for(let i=0; i<4; i++){
            const newRow = row + dx[i]
            const newCol = col + dy[i]
            if(newRow < 0 || newRow >= n || newCol < 0 || newCol >= n || board[newRow][newCol] === 1){
                continue;
            }
            const newCost = cost + 100 + (dir !== i ? 500 : 0)
            if(newCost < costs[newRow][newCol][i]){
                costs[newRow][newCol][i] = newCost
                queue.push([newRow,newCol,i,newCost])
            }
        }
    }
    return Math.min(...costs[n-1][n-1])
}