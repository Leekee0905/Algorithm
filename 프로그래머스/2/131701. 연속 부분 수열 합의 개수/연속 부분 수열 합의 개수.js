function solution(elements) {
    const set = new Set();
    const arr = [...elements,...elements]

    for(let i=1; i<=elements.length; i++){
        for(let j=0; i+j<arr.length; j++){
            set.add(arr.slice(j,j+i).reduce((acc,curr)=>acc+curr))
        }
    }
    return set.size
}