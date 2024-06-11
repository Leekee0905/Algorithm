function solution(food) {
    var answer = '';
    for(let i=0;i<food.length;i++){
        let foodCnt = Math.floor(food[i]/2)
        for(let j=0; j<foodCnt; j++){
            answer+=i
        }
    }
    let other = answer.split('').reverse().join('')
    return answer+0+other;
}