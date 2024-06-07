function solution(price, money, count) {
    var answer = -1;
    let more = 0;
    if(price>1){
        for(let i=0;i<count;i++){
            more += price*(i+1)
        }
    }
    if(more-money>0){
        return more-money
    }else
        return 0
}