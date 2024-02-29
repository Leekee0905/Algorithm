function solution(n, s) {
    const share = Math.floor(s / n);
    const rest = s % n;
    const answer = Array(n).fill(share)
    if(share <= 0) return [-1];
    for(let i=0; i<rest; i++){
        answer[answer.length-1-i]++;
    }
    return answer;
}