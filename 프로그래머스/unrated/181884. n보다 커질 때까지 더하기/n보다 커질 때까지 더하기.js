function solution(numbers, n) {
    let answer = 0;
    numbers.forEach(e=>{
        if(answer <= n)
            answer+=e
    })
    return answer;
}