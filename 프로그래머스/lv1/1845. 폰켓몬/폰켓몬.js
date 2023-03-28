function solution(nums) {
    var answer = 0;
    const set = new Set(nums)
    const newarr = [...set]
    if(newarr.length>nums.length/2)
        return newarr.length - (newarr.length-nums.length/2);
    else
        return newarr.length
}