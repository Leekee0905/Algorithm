function solution(skill, skill_trees) {
    var answer = 0;
    

    for(let i=0; i<skill_trees.length; i++){
        let skillStack = [...skill]
        let arr = (skill_trees[i].split('').filter(e=>skill.includes(e)))

        for(let j=0; j<skillStack.length+1; j++){

            if(arr[0] !== skillStack[j]){
                break;
            }else
                arr.shift()
        }

        
        if(arr.length === 0)
            answer ++
    }
    return answer;
}