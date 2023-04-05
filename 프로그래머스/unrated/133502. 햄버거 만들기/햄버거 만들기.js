function solution(ingredient) {
    var answer = 0;
    let stack = []
    const hamburger = [1,2,3,1]

    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i])
        if(stack.slice(-4).toString() == hamburger){
            answer++
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
        }
    }
    return answer;
}