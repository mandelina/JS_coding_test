// 피보나치 수열을 따름
function solution(n) {
  const DP = new Array(n + 1).fill(0);
  DP[0] = DP[1] = 1;
  for (let i = 2; i <= n; i++) {
    DP[i] = (DP[i - 2] * 2 + DP[i - 1]) % 10007;
  }
  return DP[n];
}

console.log(solution(8));

// 백준 제출용
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let n = Number(input);
const DP = new Array(n + 1).fill(0);
DP[0] = DP[1] = 1;
for (let i = 2; i <= n; i++) {
  DP[i] = (DP[i - 2] * 2 + DP[i - 1]) % 10007;
}
console.log(DP[n]);
