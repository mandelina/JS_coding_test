// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");
// let n = Number(input);

// 피보나치 수열을 따름
function solution(n) {
  const DP = new Array(n + 1).fill(0);
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 2] + DP[i - 1]) % 10007;
  }
  return DP[n];
}

console.log(solution(9));
