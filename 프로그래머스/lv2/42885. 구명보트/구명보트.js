function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>b-a).forEach((x,idx)=>{
        if(x+people[people.length-1]<=limit){
            answer ++
            people.pop()
        }
        else
            answer++
        
    })
    return answer;
}