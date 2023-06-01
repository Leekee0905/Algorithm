function solution(n, t, m, p) {
    var answer = '';
    const arr = [] 
    for(let i=0; i<t*m; i++){
        arr.push((i).toString(n))
    }
    const string = arr.join('')
    
    for(let i=0; i<string.length; i++){
        
        if(i%m + 1 === p){
            answer += string[i].toUpperCase()
        }
        
        if (answer.length === t){
            break;
        }
        
    }

    return answer;
}