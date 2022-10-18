//나의 풀이
function solution(n) {
  var answer = "";
  let word = ["수", "박"];

  let even = parseInt(n / 2);
  for (let i = 0; i < even; i++) {
    answer += "수박";
  }
  if (n % 2 === 1) {
    answer += "수";
  }
  return answer;
}

// 다른풀이

function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}
