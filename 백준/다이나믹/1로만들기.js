// 1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
// 2. X가 2로 나누어 떨어지면, 2로 나눈다.
// 3.  1을 뺀다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let num = Number(input);

const DP = new Array(num + 1).fill(0);
for (let i = 2; i <= num; i++) {
  DP[i] = DP[i - 1] + 1;
  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[num]);
