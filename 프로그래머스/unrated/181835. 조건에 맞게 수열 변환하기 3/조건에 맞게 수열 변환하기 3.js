function solution(arr, k) {
    return arr.map(e=>{
        if(k%2===0){
            return e+k
        }else
            return e*k
    });
}