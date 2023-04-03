function solution(board, moves) {
    var answer = 0;
    let stack = [];
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1]>0){
                stack.push(board[j][moves[i]-1]);                                                             
                board[j][moves[i]-1] = 0 ;
                break;
            }
        }

        if(stack[stack.length-1] === stack[stack.length-2] && stack.length>0){
            stack.pop()
            stack.pop()
            answer +=2
        }
        
    }
    
    // [[0,0,0,0,0],
    //  [0,0,1,0,3],
    //  [0,2,5,0,1],
    //  [4,2,4,4,2],
    //  [3,5,1,3,1]]
    
        
    return answer;
}