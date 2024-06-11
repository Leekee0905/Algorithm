function solution(k, score) {
    var answer = [];
    let stack = [];
    for(let i=0; i<score.length; i++){
        stack.push(score[i])
        for(let j=0; j<stack.length; j++){
            stack.sort((a,b)=>b-a)
            if(stack.length > k){
                stack.pop()
            }
        }
        
        answer.push(stack[stack.length-1])
    }
    return answer;
}