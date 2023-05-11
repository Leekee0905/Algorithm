function solution(n, control) {
    const key = { w: 1 , s: -1, d:10, a:-10}
    var answer = n;
    for(const s of control){
        answer += key[s]
    }
    return answer;
}