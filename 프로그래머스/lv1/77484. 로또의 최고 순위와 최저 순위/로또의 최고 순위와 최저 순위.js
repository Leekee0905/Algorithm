function solution(lottos, win_nums) {
    let cnt = 0;
    let same = 0;
    for(let i=0; i<lottos.length; i++){
        if(win_nums.includes(lottos[i])){
            same += 1
        }
        if(lottos[i]===0){
            cnt++
        }
    }
    
    const getRank = (number) => {

            return 6-(Math.max(number,1))+1
    }

    return [getRank(same+cnt),getRank(same)];
}

