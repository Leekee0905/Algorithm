function solution(strArr) {
    return strArr.map((e,idx)=>{
        if(idx%2===0)
            return e.toLowerCase()
        else
            return e.toUpperCase()
    })
}