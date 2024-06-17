function solution(citations) {
    const n = citations.length
    citations.sort((a,b)=>(b-a))
    let answer = 0;
    for (let i=0; i<n; i++){
        if(i<citations[i]){
            answer++
        }
    }
    return answer
}