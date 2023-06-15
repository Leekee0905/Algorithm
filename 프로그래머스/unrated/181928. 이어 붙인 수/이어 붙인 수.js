function solution(num_list) {

    const odd = num_list.filter(e=>e%2===1).reduce((a,b)=>a+b.toString())
    const even = num_list.filter(e=>e%2===0).reduce((a,b)=>a+b.toString())
    
    
    return Number(odd)+Number(even);
}