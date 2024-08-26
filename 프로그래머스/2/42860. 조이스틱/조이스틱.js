function solution(name) {
    var answer = 0;
    let length = name.length-1;
    [...name].forEach((e,idx)=>{
        answer += Math.min(e.charCodeAt() -65, 91-e.charCodeAt())
        let index = idx+1
        while(index < name.length && name[index] === 'A') index++
        length = Math.min(length, idx*2+name.length-index, idx+2*(name.length-index))
    })
    
    return answer+length;
}
