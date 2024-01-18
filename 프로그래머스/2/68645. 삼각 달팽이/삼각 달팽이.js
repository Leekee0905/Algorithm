function solution(n) {
    const answer = Array.from({length:n},(_,i)=>Array(i+1).fill(0));
    let cur = 1;
    let [row, col] = [-1,0]
    for(let i=n; i>0; i-=3){
        for(let j=0; j<i; j++){
            answer[++row][col] = cur++
        }
        for(let j=0; j<i-1; j++){
            answer[row][++col] = cur++
        }
        for(let j=0; j<i-2; j++){
            answer[--row][--col] = cur++
        }
    }
    return answer.flat();
}