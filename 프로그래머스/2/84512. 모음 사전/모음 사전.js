function solution(word) {
    const alphabet = [...'AEIOU'];
    const result = {};
    let idx = 0;

    const dfs = (words,length)=>{
        if(length > 5)
            return ;
        result[words] = idx++
        alphabet.forEach(e=>{
            dfs(words+e,length+1)
        })
    }
    
    dfs("",0)
    return result[word];
}