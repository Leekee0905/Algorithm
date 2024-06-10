function solution(s) {
    return s.split(' ').map((e=>{
        return e.split('').map((word,idx)=>idx%2===0?word.toUpperCase():word.toLowerCase()).join("")
    })).join(' ')
}