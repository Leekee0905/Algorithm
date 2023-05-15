function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return parent[x] = find(parent, parent[x]);
}

function union(parent,a,b){
    a=find(parent,a)
    b=find(parent,b)
    if(a<b){
        parent[b] = a
    }else
        parent[a] = b
}

function compare(parent, a,b){
    a=find(parent,a)
    b=find(parent,b)
    return a===b
}
function solution(n, costs) {
    var answer = 0;
    const arr = costs.sort((a,b)=>a[2]-b[2])
    const parent = Array.from({length: n}, (_, i)=>i)
    
    for(const [a,b,cost] of arr){
        if(!compare(parent, a,b)){
            answer += cost;
            union(parent, a,b)
        }
    }
    return answer;
}