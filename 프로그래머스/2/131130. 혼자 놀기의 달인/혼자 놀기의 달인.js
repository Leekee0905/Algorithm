function solution(cards) {
    const openCards = (start,opened) => {
        let box = start;
        let count = 0;
        while(!opened[box]){
            opened[box] = true;
            box = cards[box] - 1;
            count++;
        }
        return count;
    }
    
    let maxScore = 0;
    for(let i=0; i<cards.length; i++){
        const opened = Array(cards.length).fill(false)
        const group1 = openCards(i,opened)
        for(let j=0; j<cards.length; j++){
            if(opened[j])
                continue;
            const group2 = openCards(j,opened)
            maxScore = Math.max(maxScore, group1 * group2)
        }
    }
    return maxScore
}