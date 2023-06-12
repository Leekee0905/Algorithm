function solution(s) {
    let arr = s.split('').filter(e=>{
        let index = s.split('').filter(i=>i===e).length
        return index===1
    })

    return arr.sort().join('');
}