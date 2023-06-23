function solution(k, d) {
    var answer = 0;
    for(let i=0; i<d+1 ; i+=k){
        const maxY = Math.sqrt(d**2 - i**2)
        answer += (Math.floor(maxY/k)+1)
    }
    return answer;
}