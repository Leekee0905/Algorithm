function solution(lines) {
    let arr = new Array(200).fill(0)

    lines.forEach(([x,y])=>{
        for(;x<y;x++){
            arr[x+100]++
        }
    })
    return arr.reduce((a,c)=>c>1? a+1 : a,0);
}