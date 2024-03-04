function solution(operations) {
    let queue = [];
    operations.forEach(e=>{
        const[command, value] = e.split(' ').map((ele,idx)=>idx===1 ? Number(ele) : ele)
        switch(command){
            case "I":{
                queue.push(value)
                break;
            }
            case "D":{
                if(value === -1){
                    const min = Math.min(...queue)
                    queue = queue.filter(e=>e!==min)
                }
                if(value === 1){
                    const max = Math.max(...queue)
                    queue = queue.filter(e=>e!==max)
                }

            }
        }
    })

    return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0,0];
}