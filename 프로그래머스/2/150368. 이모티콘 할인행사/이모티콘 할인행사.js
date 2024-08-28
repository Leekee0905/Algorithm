function solution(users, emoticons) {
    let [count, money] = [0,0]
    let allCase = [];
    let disCount = [10, 20, 30, 40];
    // 모든 경우의 수를 구해주는 DFS
    const DFS = (emotions, case1) => {
        if (emotions.length < 1) {
          allCase.push(case1);
          return;
        }
        for (let i = 0; i < 4; i++) {
          DFS(emotions.slice(1), [...case1, [disCount[i], emotions[0]]]);
        }
        

    }
        
    DFS(emoticons, []);
    const disCountPrice = (per, price) => ((100 - per) / 100) * price;

    allCase.forEach((way) => {
        let [tempC,tempM] = [0,0]

        users.forEach((user) => {
            let price = 0;
            way.forEach((info) => {
                if (user[0] <= info[0]) price += disCountPrice(info[0], info[1])});
                if (price >= user[1]) tempC++;
                else tempM += price;
            });
        
        if(count < tempC) {
          count = tempC;
          money = tempM;
        } else if (count === tempC) {
          money = Math.max(money, tempM);
        }
      });

      return [count, money];
}