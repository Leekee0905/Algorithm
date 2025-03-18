function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>b-a).forEach((e,idx)=>{
        if(e+people.at(-1) <= limit){
            answer ++;
            people.pop()
        }
        else answer++
    })
    return answer;
}