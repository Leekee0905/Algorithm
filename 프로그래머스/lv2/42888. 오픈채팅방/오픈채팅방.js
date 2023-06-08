function solution(record) {
    var answer = [];
    let map = new Map()
    record.forEach(e=>{
        let [enter, uid, name] = e.split(' ')
        if(enter === "Enter" || enter === "Change"){
            map.set(uid,name)
        }

    })

    record.map(e=>{
        let [enter,uid,name] = e.split(' ')
        if(enter==='Enter'){
            answer.push(`${map.get(uid)}님이 들어왔습니다.`)
        }else if(enter === "Leave"){
            answer.push(`${map.get(uid)}님이 나갔습니다.`)
        }
    })
    
    return answer;
}