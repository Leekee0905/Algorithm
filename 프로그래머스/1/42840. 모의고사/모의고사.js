function solution(answers) {
    var answer = [];
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5]
    
    const a1c = answers.filter((a1,i)=> a1 === a[i%a.length]).length;
    const b1c = answers.filter((b1,i)=> b1 === b[i%b.length]).length;
    const c1c = answers.filter((c1,i)=> c1 === c[i%c.length]).length;
    
    const winner = Math.max(a1c, b1c, c1c)
    
    
    if(a1c === winner) answer.push(1)
    if (b1c === winner) answer.push(2)
    if (c1c === winner) answer.push(3)

    return answer;
}