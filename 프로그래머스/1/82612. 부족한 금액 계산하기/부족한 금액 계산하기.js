function solution(price, money, count) {
    let temp = 0;
    for(let i=0; i<count; i++){
        temp += price*(i+1)
    }
    
    return money >= temp ? 0 : temp-money
}