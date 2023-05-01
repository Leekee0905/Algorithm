function solution(n, words) {
    let answer = [0,0]
    for(let i=1; i<words.length; i++){
        const currWord = words[i]
        if(words.indexOf(currWord) !== i)
            return [i%n+1, Math.floor(i/n)+1]
        
        const lastWord = words[i-1].slice(-1)
        const firstWord = currWord[0]
        if(lastWord !== firstWord)
            return [i%n+1, Math.floor(i/n)+1]
    }
    return answer
}