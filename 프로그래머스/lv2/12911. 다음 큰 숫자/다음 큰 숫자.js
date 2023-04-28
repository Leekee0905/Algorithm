function solution(n) {
    let answer = 0;
    const one  = n.toString(2).split('').filter(e=>e==='1').length
    while(true){
        n++
        let temp = n.toString(2).split('').filter(e=>e==='1').length
        
        if(temp == one){
            answer = n
            break;
        }
    }
    return n
}