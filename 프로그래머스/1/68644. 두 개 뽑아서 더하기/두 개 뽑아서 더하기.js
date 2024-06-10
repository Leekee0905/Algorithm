function solution(numbers) {
    let answer =[];
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<i; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    
    //중복 지우기
    answer = answer.filter((val,idx)=>{
        return answer.indexOf(val) === idx
    })
    return answer.sort((a,b)=>a-b)
    
}