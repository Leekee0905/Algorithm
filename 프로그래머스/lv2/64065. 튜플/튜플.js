function solution(s) {
    let set = new Set()
    const newarr = s.replace("{{", '').replace("}}",'').split('},{').map(e=>e.split(','))
    newarr.sort((a,b)=>{
        if(a.length>b.length){
            return 1
        }else 
            return -1
    })

    for(const arr of newarr){
        for(const num of arr){
            set.add(parseInt(num))
        }
    }
    return Array.from(set);
}