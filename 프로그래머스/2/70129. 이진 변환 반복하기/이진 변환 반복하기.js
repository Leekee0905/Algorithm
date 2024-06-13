function solution(s) {
    let zeroCnt = 0;
    let cnt = 0;
    while(s.length > 1){
        zeroCnt += s.split('').filter(e=>e==='0').length
        cnt++
        s=s.replace(/0/g,'').length.toString(2)
    }
    
    return [cnt, zeroCnt];
}