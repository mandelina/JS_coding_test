const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();
const mod = 1000000009;
const answer = [];
const MAX = Math.max(...input);
// 각 마지막숫자가 1,2,3 일때 그 전 숫자의 마지막이  자신이 아닌 값을 더하면 된다

let dp = Array.from(Array(MAX + 1), () => [0]);
dp[0] = [0];
dp[1] = [0, 1, 0, 0];
dp[2] = [0, 0, 1, 0];
dp[3] = [0, 1, 1, 1];

for (let i = 4; i <= MAX; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % mod;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % mod;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % mod;
}

for (let t = 0; t < N; t++) {
  answer.push(
    dp[input[t]].reduce((r, v) => {
      return (r + v) % mod;
    }, 0)
  );
}

console.log(answer.join("\n"));
