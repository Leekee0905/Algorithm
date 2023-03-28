function solution(number, limit, power) {
    let cnt = [];
    for(let i=1; i<=number;i++){
        let temp = 0;
        for(let j=1; j<=i/2; j++){
            if(i%j===0){
                temp++
            }
        }
        temp++
        cnt.push(temp)
    }
    let newCnt = cnt.map((n)=>{return n > limit ? power: n})
    return newCnt.reduce((a,b)=>a+b)
}