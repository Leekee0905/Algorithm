function solution(l, r) {
    var answer = [];
    let regex = /^[50]+$/
    for(let i=l; i<=r; i++){
        if(regex.test(i.toString())){
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1] : answer;
}