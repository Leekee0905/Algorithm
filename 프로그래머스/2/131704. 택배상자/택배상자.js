function solution(order) {
    let stack = []
    let temp = 0
    order.forEach((e,idx)=>{
        stack.push(idx+1)
        while(stack.length > 0 && stack[stack.length-1] === order[temp]){
            stack.pop()
            temp++
        }
    })
    return temp;
}