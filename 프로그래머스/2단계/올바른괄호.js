// cnt를 두고 +1, -1를 해서 length값이 0이 아니면 false
// 또는 아래 코드처럼 stack을 이용하여 계신
// 효율성 문제에서 for (const of s)를 for (let if s)로 개선하였더니 해결

function solution(s) {
  let answer = true;
  let arr = [];
  for (let cur of s) {
    if (cur === "(") {
      arr.push(cur);
    } else {
      if (arr.length === 0) return false;
      arr.pop();
    }
  }

  if (arr.length !== 0) return false;
  return answer;
}
