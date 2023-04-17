function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        const aGap = Math.abs(a-n)
        const bGap = Math.abs(b-n)
        
        if(aGap === bGap) return b-a
        return aGap-bGap
    });
}