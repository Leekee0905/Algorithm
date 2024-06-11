function solution(n, m, section) {
    var answer = 1;
    let temp = section[0];
    section.map(v=>{if((temp+m-1)<v){
        temp = v
        answer++
    }})
    return answer;
}