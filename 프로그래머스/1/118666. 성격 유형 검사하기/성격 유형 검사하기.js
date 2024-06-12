function solution(survey, choices) {
    var answer = '';
    let types = {R:0,T:0, C:0, F:0,J:0,M:0,A:0,N:0}
    
    for(let i=0; i<choices.length; i++){
        let temp = survey[i].split('')
        let score = Math.abs(choices[i]-4)
        if(choices[i] > 4){
            types[temp[1]] += score
        }else if(choices[i]<4)
            types[temp[0]] += score
    }
    
    const mbti = Object.keys(types)
    for(let j=0; j<mbti.length; j+=2){
        let left = types[mbti[j]]
        let right = types[mbti[j+1]]
        if(left >= right)
            answer += mbti[j]
        else answer += mbti[j+1]
    }
    
    return answer;
}