function solution(picks, minerals) {
    let answer = 0;
    const picksCount = picks.reduce((a,c)=>a+c,0)
    const sliceMinerals = minerals.slice(0,picksCount * 5)
    const countedMinerals = sliceMinerals.reduce((prev, curr, idx) => {
        const index = Math.floor(idx / 5);
        if (!prev[index]) prev[index] = [0, 0, 0];
        if (curr === "diamond") {
          prev[index][0]++;
        } else if (curr === "iron") {
          prev[index][1]++;
        } else if (curr === "stone") {
          prev[index][2]++;
        }
        return prev;
      }, []);
    const sortedMinerals = countedMinerals.sort((a,b)=>b[0]-a[0] || b[1] - a[1]);
    sortedMinerals.forEach(e=>{
        const [dia, iron, stone] = e;
        if(picks[0]){
            answer += dia + iron + stone
            picks[0]--
        }else if(picks[1]){
            answer += dia * 5 + iron + stone
            picks[1]--
        }else{
            answer += dia * 25 + iron * 5 + stone
            picks[2]--
        }
    })
    return answer;
}