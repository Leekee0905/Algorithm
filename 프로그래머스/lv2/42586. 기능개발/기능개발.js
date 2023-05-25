function solution(progresses, speeds) {
    var answer = [0];
    let days = progresses.map((progress, idx)=>Math.ceil((100-progress)/speeds[idx]))
    let maxDays = days[0]
    for(let i=0, j=0; i<days.length; i++){
        if(days[i]<= maxDays){
            answer[j] ++
        }else{
            maxDays = days[i]
            answer[++j] = 1
        }
    }
    
    return answer;
}