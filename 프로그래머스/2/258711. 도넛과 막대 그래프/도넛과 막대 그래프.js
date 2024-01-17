function solution(edges) {
    var answer = [0,0,0,0];
    const graph = Array.from({length:edges.length+1});
    const visited = new Array(edges.length+1).fill(0)
    const map = new Map()
    
    edges.sort((a,b)=>a[0]-b[0])
    edges.forEach(([from,to])=>{
        if (!map.has(from)) {
            map.set(from, [0,0]);
        }
        if(!map.has(to)){
            map.set(to,[0,0])
        }
        map.get(from)[0] += 1
        map.get(to)[1] += 1
    })

    for(const [key,value] of map){
        if(value[0] >= 2 && value[1] === 0){
            answer[0] = key
        }else if(value[0] === 0 && value[1]>0){
            answer[2]+=1
        }else if(value[0] >= 2 && value[1] >=2){
            answer[3]+=1
        }
    }
    answer[1] = map.get(answer[0])[0] - answer[2] - answer[3]

    return answer;
}