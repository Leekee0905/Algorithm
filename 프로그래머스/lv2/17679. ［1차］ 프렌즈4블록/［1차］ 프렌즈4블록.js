function solution(m, n, board) {
    board = board.map(e=>e.split(''))
    while(true){
        let founded = []

        for(let i=1; i<m; i++){
            for(let j=1; j<n; j++){
                if(board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] 
                   && board[i][j] === board[i - 1][j]){
                    founded.push([i,j])
                }
            }
        }
        
        if(!founded.length) 
            return [].concat(...board).filter(e=>!e).length
        
        founded.forEach(e => {
            board[e[0]][e[1]] = 0;
            board[e[0]][e[1] - 1] = 0;
            board[e[0] - 1][e[1] - 1] = 0;
            board[e[0] - 1][e[1]] = 0;
        });
        
        for(let i=m-1; i>0; i--){
            if (! board[i].some(v => ! v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
        
    }
}