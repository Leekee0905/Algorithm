function solution(plans) {
    var answer = [];
    
    const newPlan = plans.map((e,idx)=>{
        let [homework, start, playTime] = e
        let [hour, min] = start.split(':').map(Number)
        start = hour * 60 + min
        return [homework, start, Number(playTime)]
    }).sort((a,b)=>a[1]-b[1])
    const first = newPlan.shift();
    let curTime = first[1]
    let stack = [first]
    
    while(newPlan.length){
        const target = newPlan.shift();
        const [_name, time, _spend] = target;
        let timeDiff = time - curTime;
        curTime = time;
        
        while(stack.length && timeDiff > 0){
            const latestPlan = stack.pop();
            const [lastName, lastTime, lastSpend] = latestPlan
            
            if(lastSpend <= timeDiff){
                answer.push(lastName)
                timeDiff -= lastSpend
            }else{
                latestPlan[2] = lastSpend -timeDiff;
                timeDiff = 0;
                stack.push(latestPlan)
            }
        }
        stack.push(target)
    }
    
    while(stack.length){
        answer.push(stack.pop()[0])
    }
    return answer;
}