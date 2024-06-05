const solution = (absolutes, signs) => absolutes.reduce((acc,curr,index)=>{
        if(signs[index] === true){
            return acc+curr
        }
        if(signs[index] === false)
            return acc-curr
    },0);
