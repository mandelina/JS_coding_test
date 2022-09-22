// sol1 - 효율성 테스트 1개 통과못함
function solution(s) {
  let answer = 0;
  let notPairStack = [];
  for (let i = 0; i < s.length; i++)
    notPairStack[notPairStack.length - 1] === s[i]
      ? notPairStack.pop()
      : notPairStack.push(s[i]);
  answer = notPairStack.length === 0 ? 1 : 0; // 길이가 0이면 다 없어진것
  return answer;
}
