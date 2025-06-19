function solution(n) {
    let result = []
    for(let i=0; i<=n; i++){
        if(i<2) result.push(i)
        else result.push((result[i-2]+result[i-1]) %  1234567)
    }
    return result[n]
}