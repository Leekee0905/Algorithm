function solution(s) {
    let answer = [];
    const newarr = s.replace("{{", '').replace("}}",'').split('},{').map(e=>e.split(','))
    newarr.sort((a,b)=>{
        if(a.length>b.length){
            return 1
        }else 
            return -1
    })

    answer.push(parseInt(newarr[0][0]))

    const getNumber = (set, answer) => {
        for(let i=0; i<set.length; i++){
            for(const number of answer){
                set = set.filter(e=>parseInt(e) !== number)
            }
        }
        return parseInt(set[0])
    }
    
    for(let i=1; i<newarr.length; i++){
        let num = getNumber(newarr[i],answer)
        answer.push(num)
    }

    return answer;
}