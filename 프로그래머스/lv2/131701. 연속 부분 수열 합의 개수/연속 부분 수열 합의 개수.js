function solution(elements) {
    const set = new Set()
    for(let i=0; i<elements.length; i++){
        elements.forEach((e,idx)=>{
            let re = (idx+i+1) % elements.length;
            if((idx+i+1)/elements.length > 1){
                set.add([...elements.slice(0,re),...elements.slice(idx,idx+i+1)].reduce((acc,cur)=>acc+cur))
            }else
                set.add(elements.slice(idx,idx+i+1).reduce((acc,cur)=>acc+cur))
        })
    }
    return set.size;
}