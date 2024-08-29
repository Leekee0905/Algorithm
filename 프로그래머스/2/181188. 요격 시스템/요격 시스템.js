function solution(targets) {
    let [count, e] = [0,0]
    targets.sort((a,b)=>a[1]-b[1]).forEach((target,idx)=>{
        const [start,end] = target
        if(start>=e){
            count++;
            e = end;
        }
    })
    return count;
}