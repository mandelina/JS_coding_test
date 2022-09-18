function solution(n) {
  let answer = n;
  const nCountOne = n.toString(2).match(/1/g).length; // 1의 갯수

  while (true) {
    answer++;
    if (nCountOne === answer.toString(2).match(/1/g).length) break; //1의갯수가 같아지면 break
  }
  return answer;
}
