function solution(cards1, cards2, goal) {
    let stack = [];
    let tempCard1 = cards1
    let tempCard2 = cards2
    for(let i=0; i<goal.length;i++){
        if(goal[i] === tempCard1[0]){
            stack.push(tempCard1.shift())
        }
        else if(goal[i] === tempCard2[0]){
            stack.push(tempCard2.shift())
        }
        else return "No"

    }
    
    if(stack.toString() == goal)
        return "Yes"

}