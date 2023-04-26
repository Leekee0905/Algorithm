function solution(keymap, targets) {
    var answer = [];
    let pressKey = 0;
    for(const target of targets){
        for(let i=0; i<target.length; i++){
            let count = Infinity;
            keymap.forEach(e=>{
                let idx = e.indexOf(target[i])
                if(idx>-1){
                    count = Math.min(count, idx+1)
                }
            })
            pressKey += count;
        }
        answer.push(pressKey)
        pressKey = 0;
    }
    return answer.map(e=>{
        if(e===Infinity){
            e=-1
        }
        return e
    });
}