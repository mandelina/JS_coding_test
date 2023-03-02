// 풀이용
function solution(n) {
  const DP = new Array(n + 1).fill(0);
  DP[0] = DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
  }
  return DP[n];
}
n = 10;
console.log(solution(n));

//백준용
const solution = (N, data) => {
  let answer = "";
  const dp = [0, 1, 2, 4];

  for (let i = 0; i < N; i += 1) {
    for (let j = 4; j <= data[i]; j += 1) {
      dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
    }
    const idx = data[i];

    if (i < N - 1) answer += `${dp[idx]}\n`;
    else answer += `${dp[idx]}`;
  }

  console.log(answer);
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
const data = [];
for (let i = 1; i <= N; i += 1) {
  data.push(+input[i]);
}
solution(N, data);
