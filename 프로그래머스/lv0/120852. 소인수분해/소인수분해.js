function solution(n) {
    var answer = [];
    for(let i=2; i<=n; i++){
        while(n%i===0){
            n /= i
            answer.push(i)
        }
    }
    
    return answer.filter((e,idx)=>answer.indexOf(e)===idx);
}