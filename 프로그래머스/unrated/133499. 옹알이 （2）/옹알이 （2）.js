function solution(babbling) {
    var answer = 0;

  for (let word of babbling) {

    // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
    // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 정규식을 이용해 발음할 수 있는 단어만 있는지 체크합니다.
    // 발음할 수 있는 단어만 있다면 answer을 1 증가시킵니다.
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }
    return answer;
}