function solution(myString, pat) {
    const arr = myString.split('').map(e=>{
        if(e==='A')
            return "B"
        else
            return "A"
    });
    return arr.join("").includes(pat) ? 1 : 0
}