function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    if(cacheSize.length === 0)
        return cities.length * 5;
    
    cities.forEach((e) => {
        let upperE = e.toLowerCase();
        if(cache.includes(upperE)) {
            answer++;
            cache.splice(cache.indexOf(upperE),1);
        } else {
            answer += 5;
        }
        cache.push(upperE);
        if(cache.length > cacheSize) cache.shift();
    })

    return answer;
}