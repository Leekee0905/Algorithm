function solution(polynomial) {
    let xNum = 0;
    let num = 0;
    polynomial.split(' ').forEach(e=>{
        if(e.includes('x')){
            const xArr = e.split('x')
            if(e.split('').length === 1){
                xNum += 1
            }else{
                xNum += Number(xArr[0])
            }
        }
        
        if(!e.includes('x')){
            if(e!=='+')
                num += Number(e)
        }
    })
    

    if(xNum !== 0 && num !== 0){
        if(xNum === 1){
            return `x + ${num}`
        }
        return `${xNum}x + ${num}`
    }
    
    if(xNum !== 0 && num === 0){
        if(xNum === 1){
            return 'x'
        }
        return `${xNum}x`
    }
    
    if(xNum === 0 && num !==0){
        return `${num}`
    }
    
    if(xNum === 0 && num === 0){
        return '0'
    }

}