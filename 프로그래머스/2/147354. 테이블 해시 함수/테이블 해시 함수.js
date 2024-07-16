function solution(data, col, row_begin, row_end) {
    let answer = 0;
    const newData = data.sort((a,b)=>{
        if(a[col-1]-b[col-1] === 0){
            return b[0]-a[0]
        }
        return a[col-1]-b[col-1]
    })
    for(let i=row_begin; i<=row_end; i++){
        answer ^= newData[i-1].reduce((acc,curr)=>acc+curr%i,0)
    }
    return answer;
}