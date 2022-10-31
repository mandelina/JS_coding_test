// 메서드 체이닝으로 구현
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((i) => Number(i));
}
