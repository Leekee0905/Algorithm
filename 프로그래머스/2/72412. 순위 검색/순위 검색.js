function makeKeys(attrs, score, map, depth, key) {
    if (depth === attrs.length) {
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(score);
        return;
    }
    makeKeys(attrs, score, map, depth + 1, key + attrs[depth]);
    makeKeys(attrs, score, map, depth + 1, key + '-');
}

function countGE(arr, target) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] >= target) hi = mid;
        else lo = mid + 1;
    }
    return arr.length - lo;
}
function solution(info, query) {
    const answer = [];
    const map = new Map();
    
    for (const str of info) {
        const parts = str.split(' ');
        const attrs = parts.slice(0, 4);
        const score = +parts[4];
        makeKeys(attrs, score, map, 0, '');
    }

    for (const arr of map.values()) {
        arr.sort((a, b) => a - b);
    }
    
    for (const q of query) {
        const parts = q.replace(/ and /g, ' ').split(' ');
        const key = parts.slice(0, 4).join('');
        const target = +parts[4];
        const arr = map.get(key) || [];
        answer.push(countGE(arr, target));
    }

    return answer;
}
