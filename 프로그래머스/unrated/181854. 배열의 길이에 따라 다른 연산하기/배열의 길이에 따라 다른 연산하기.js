function solution(arr, n) {
    return arr.length % 2 === 0 ? 
        arr.map((e,idx)=>{
        if(idx%2===1){
            return e+n
        }else
            return e
    })
    :
    arr.map((e,idx)=>{
        if(idx%2===0){
            return e+n
        }else
            return e
    });
}