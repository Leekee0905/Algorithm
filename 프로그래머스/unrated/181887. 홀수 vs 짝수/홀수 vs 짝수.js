function solution(num_list) {
    const odd = num_list.filter((e,idx)=>idx%2===1).reduce((a,b)=>a+b)
    const even = num_list.filter((e,idx)=>idx%2===0).reduce((a,b)=>a+b)
    return odd>=even ? odd: even;
}