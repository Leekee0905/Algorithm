function solution(t, p) {
    var answer = 0;
    for(let i=0; i<=t.length-p.length;i++){
        let tempstr=t.substr(i,p.length)
        if(parseInt(tempstr) <= parseInt(p) ){
            answer++
        }
    }
    return answer;
}