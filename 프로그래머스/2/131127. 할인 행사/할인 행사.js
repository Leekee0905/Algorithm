function solution(want, number, discount) {
    let answer = 0;
    if(!discount.includes(want[0]) && want.length === 1){
        return 0
    }
    
    for(let i=0; i<discount.length; i++){
        let discountProduct = discount.slice(i,i+10)

        for(let j=0; j< want.length; j++){
            let wantedCount = discountProduct.filter(e=>e===want[j]).length
            if(wantedCount >= number[j]){
                if(j===want.length-1){
                    answer++
                }
            }else
                break;
        }
    }
    return answer
}