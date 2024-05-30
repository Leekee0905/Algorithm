function solution(gems) {
    let answer = [1,gems.length];
    const map = new Map()
    const length = new Set(gems).size
    for(let i=0; i<gems.length; i++){
        map.delete(gems[i])
        map.set(gems[i], i)
        if(map.size === length){
            const temp = [map.values().next().value+1, i+1]
            answer = answer[1] - answer[0] > temp[1] - temp[0] ? temp : answer
        }
    }

    return answer;
}