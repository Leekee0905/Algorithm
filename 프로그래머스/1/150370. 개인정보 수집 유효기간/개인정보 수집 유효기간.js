function solution(today, terms, privacies) {
    const obj = {};

    terms.forEach((i) => {
        obj[i[0]] = parseInt(i.split(' ')[1]);
    });
    

    const date = privacies.map(i => {
        let a = i.split(' ');
        return a[0].split('.').map(i => parseInt(i));
    });
    
    const reserve = privacies.map((i) => {
        let a = i.split(' ');
        return a[1];
    });
    
    for(let i = 0 ; i < reserve.length ; i++){
      date[i][1] = date[i][1] + obj[reserve[i]];

        if(date[i][1] > 12){
            date[i][1] = date[i][1] - 12;
            date[i][0]++;
        }

    }

    today = today.split('.').map(i => parseInt(i))

    let result = [];

    date.forEach((i,idx) => {

        const a = new Date(...today);
        const b = new Date(...i);

        if( a >= b ){
            result.push(idx+1);
        }
    });

    return result;
}
