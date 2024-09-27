function solution(sequence) {
    let m = 0, M = 0;
    let acc = m;

    for (let i = 0; i < sequence.length; i++) {
        acc = i % 2 == 1 ? acc - sequence[i] : acc + sequence[i];
        // 누적합 최대값에서 최소값을 빼면 항상 최대, 5번째까지 더한 값에서 2번째까지 더한값을 빼면 3~5번째 부분수열
        M = Math.max(M, acc);
        m = Math.min(m, acc);
    }
    return M == m ? M : M - m;
}