function solution(my_string) {
    
    const nums = my_string.match(/[0-9]+/g)
    
    return nums ? nums.reduce((a,b)=>a+Number(b),0) :0;
}