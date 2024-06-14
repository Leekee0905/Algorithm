function solution(arr) {
    const getLcm = (array) => {
        const maxNum = Math.max(...arr)
        let lcm = maxNum;
        let flag = false;
        while(!flag){
            flag = true;
            for(let i=0; i<array.length; i++){
                if(lcm % array[i] !== 0){
                    flag=false;
                    lcm += maxNum;
                    break;
                }
            }
        }
        return lcm
    }
    return getLcm(arr);
}