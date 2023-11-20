function solution(orders, course) {
    var answer = [];
    const obj = {};
    
    const combination = (arr,num) => {
        const result = [];
        if( num === 1 ){
            return arr.map(e=>[e])
        }
        
        arr.forEach((fix,idx,array)=>{
            const restArray = array.slice(idx+1);
            const combiArr = combination(restArray, num-1);
            const combiFix = combiArr.map(e=>[fix,...e])
            result.push(...combiFix)
        })
        
        return result
    }
    
    course.map(num=>{
        orders.forEach(menu=>{
            combination(menu.split(''),num).map(e=>{
                const word = e.sort().join('');
                Object.hasOwn(obj,word) ? obj[word] += 1 : obj[word] = 1;
            })
        })
    })
    
    course.map(num => {
        let maxNum = 0;
        for(const key in obj){
            if(obj[key] === 1){
                continue;
            }
            
            if(key.length === num){
                obj[key] > maxNum ? maxNum = obj[key] : "";
            }
        }
        
        let temp = Object.keys(obj).filter(e=>{
            return obj[e] === maxNum && e.length === num;
        });
        temp.map(e=>answer.push(e))
    })
    return answer.sort();
}