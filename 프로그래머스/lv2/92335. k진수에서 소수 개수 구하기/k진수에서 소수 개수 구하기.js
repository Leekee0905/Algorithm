function is_Prime(num) {
    if(num === 2){
        return true
    }
    for(let i=2; i<= Math.floor(Math.sqrt(num)); i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
function solution(n, k) {
    const change = n.toString(k).split('0').filter(e=>e!=='' && e!=='1')
    return change.filter(e=>is_Prime(parseInt(e,10))).length;
}