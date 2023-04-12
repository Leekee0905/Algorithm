function solution(id_list, report, k) {
    const reportCounts = {};
    const reportedBy = {};
    const answer = [];

    for (const id of id_list) {
        reportCounts[id] = 0;
        reportedBy[id] = new Set();
    }

    for (const r of report) {
        const [reporter, reported] = r.split(' ');

        if (!reportedBy[reported].has(reporter)) {
            reportedBy[reported].add(reporter);
            reportCounts[reported]++;
        }
    }

    for (const id of id_list) {
        let cnt = 0;
        for (const reported in reportCounts) {
            if (reportCounts.hasOwnProperty(reported) && reportCounts[reported] >= k && reportedBy[reported].has(id)) {
                cnt++;
            }
        }
        answer.push(cnt);
    }

    return answer;
}