function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc,cur)=>acc+cur,0)
    let sum2 = queue2.reduce((acc,cur)=>acc+cur,0)
    const totalLength = queue1.length * 2;
    let queue1Index = 0;
    let queue2Index = 0;
    let answer = 0;
    while(sum1 !== sum2){
        if(sum1 > sum2){
            sum1 -= queue1[queue1Index]
            queue2.push(queue1[queue1Index])
            sum2 += queue1[queue1Index++]
        }else{
            sum2 -= queue2[queue2Index]
            queue1.push(queue2[queue2Index])
            sum1 += queue2[queue2Index++]
        }
        answer ++;
        if(queue1Index>totalLength || queue2Index > totalLength){
            return -1
        }
    }
    return answer
}