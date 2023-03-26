// 백준 제출용
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const test_num = Number(input.shift());
// const test_case = input.shift().split(" ").map(Number);

// const dp = new Array(test_num);
// dp[0] = [1, [test_case[0]]];

// for (let i = 1; i < test_num; i++) {
//   let max = [0, []];
//   for (let j = 0; j <= i; j++) {
//     if (test_case[j] < test_case[i]) {
//       if (max[0] < dp[j][0]) {
//         max = [dp[j][0], dp[j][1]];
//       }
//     }
//   }
//   dp[i] = [max[0] + 1, max[1].concat(test_case[i])];
// }

// let max_item = [0, []];

// dp.forEach((item) => {
//   if (item[0] > max_item[0]) {
//     max_item = item;
//   }
// });

// console.log(max_item[0]);
// console.log(max_item[1].join(" "));
//---------------------------------------------------------------
//  디버깅용
function solution(test_num, test_case) {
  const dp = new Array(test_num);
  dp[0] = [1, [test_case[0]]]; // 최대길이, 그때의 배열

  for (let i = 1; i < test_num; i++) {
    let max = [0, []];
    for (let j = 0; j <= i; j++) {
      if (test_case[j] < test_case[i]) {
        if (max[0] < dp[j][0]) {
          max = [dp[j][0], dp[j][1]];
        }
      }
    }
    dp[i] = [max[0] + 1, max[1].concat(test_case[i])];
  }

  let max_item = [0, []];

  dp.forEach((item) => {
    if (item[0] > max_item[0]) {
      max_item = item;
    }
  });

  console.log(max_item[0]);
  console.log(max_item[1].join(" "));
}

let test_num = 6;
let test_case = [10, 20, 10, 30, 20, 50];
solution(test_num, test_case);
