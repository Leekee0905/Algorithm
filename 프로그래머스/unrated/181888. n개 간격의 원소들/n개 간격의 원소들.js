function solution(num_list, n) {
    return num_list.filter((e,idx)=>{
        if(idx%n===0)
            return e
    });
}