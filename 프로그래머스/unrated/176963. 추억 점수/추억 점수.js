function solution(name, yearning, photo) {
    var answer = [];
    let rank = {};

    for(let i=0; i<name.length;i++){
        rank[name[i]] = yearning[i]
    }
    
    
    for(let j=0; j< photo.length; j++){
        let stack = [];
        for(let k=0; k<photo[j].length; k++){
            if(photo[j][k] in rank){
                stack.push(rank[photo[j][k]])
            }else
                stack.push(0)
        }
        answer.push(stack.reduce((a,b)=>a+b))
    }
    return answer
}