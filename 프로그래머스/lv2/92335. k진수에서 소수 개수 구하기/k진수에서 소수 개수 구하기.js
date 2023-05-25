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
    var answer = 0;
    const change = n.toString(k).split('0').filter(e=>e!=='' && e!=='1')
    change.map(e=>parseInt(e,10)).forEach(e=>{
        if(is_Prime(e))
            answer++
    })

    return answer;
}