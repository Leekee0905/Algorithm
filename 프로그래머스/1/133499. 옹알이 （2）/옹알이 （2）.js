function solution(babbling) {
    var answer = 0;

  for (let s of babbling) {

    if (/(aya|ye|woo|ma)\1+/g.test(s)) continue;

    if (/^(aya|ye|woo|ma)+$/g.test(s)) {
      answer++;
    }
  }
    return answer;
}