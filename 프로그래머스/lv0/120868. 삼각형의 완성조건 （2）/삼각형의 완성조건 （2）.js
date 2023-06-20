function solution(sides) {
    var answer = 0;
    let i=Math.max(...sides);
    let j=sides.reduce((a,b)=>a+b)-1
    while(Math.max(...sides)<Math.min(...sides)+i){
        answer++
        i--
    }
    while(j<sides.reduce((a,b)=>a+b) && j > Math.max(...sides)){
        answer++
        j--
    }
    
    return answer;
}