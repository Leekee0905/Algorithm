function solution(expression) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    const calculator = (a,b,operand)=>{
        switch(operand){
            case "+":
                return a+b
            case "-":
                return a-b
            case "*":
                return a*b
        }
    }
        
    const combinations = [
        ["+","-","*"],
        ["+","*","-"],
        ["-","+","*"],
        ["-","*","+"],
        ["*","+","-"],
        ["*","-","+"]
    ]
    
    combinations.forEach((combination) => {
        const operands = expression.match(/[0-9]+/g).map(Number);
        const operators = expression.match(/[\*\+\-]/g);
        combination.forEach((c) => {
            let idx = operators.indexOf(c);
            while (idx !== -1) {
                operands[idx] = calculator(operands[idx], operands[idx + 1], c);
                operands.splice(idx + 1, 1);
                operators.splice(idx, 1);
                idx = operators.indexOf(c);
            }
        });
        if (answer < Math.abs(operands[0])) answer = Math.abs(operands[0]);
    });
    return answer;
}