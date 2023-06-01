function solution(chicken) {
    var answer = 0;
    let coupon = 0;
    for(let i=0; i<chicken; i++){
        if((i+1) % 10 === 0){
            coupon ++
            chicken++
        }
    }
    return coupon;
}