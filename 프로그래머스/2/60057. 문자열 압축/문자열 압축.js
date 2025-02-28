function compressString(s, unit) {
    let compressed = [];
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < s.length; i += unit) {
        let cur = s.slice(i, i + unit);
        if (prev === cur) {
            count += 1;
        } else {
            compressed.push(count > 1 ? `${count}${prev}` : prev);
            prev = cur;
            count = 1;
        }
    }

    compressed.push(count > 1 ? `${count}${prev}` : prev);

    return compressed.join("").length;
}

function solution(s) {
    if (s.length === 1) return 1;

    let minLength = Infinity;
    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        minLength = Math.min(minLength, compressString(s, unit));
    }

    return minLength;
}
