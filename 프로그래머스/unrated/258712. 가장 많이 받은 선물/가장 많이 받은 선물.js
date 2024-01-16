function solution(friends, gifts) {
    const answer = {};
    const obj = {};
    const giftRate = {}
    friends.forEach(e=>{
        obj[e] = {};
        giftRate[e] = 0;
        answer[e] = 0;
        for(const i of friends){
            if(i!==e){
                obj[e][i] = 0
            }
        }
    })
    
    gifts.forEach(e=>{
        const [from, to] = e.split(' ');
        obj[from][to]++
        giftRate[from]++
        giftRate[to]--
    })

    const names = Object.keys(obj)
    for(let i = 0; i<names.length; i++){
        const name1 = names[i];
        for (let j = i + 1; j < names.length; j++) {
            const name2 = names[j];
            if(obj[name1][name2] > obj[name2][name1]){
                answer[name1]++
            }else if(obj[name1][name2] < obj[name2][name1]){
                answer[name2]++
            }else{
                if(giftRate[name1]>giftRate[name2]){
                    answer[name1]++
                }else if(giftRate[name1]<giftRate[name2]){
                    answer[name2]++
                }
            }
        }
    }
    
    return Math.max(...Object.values(answer));
}