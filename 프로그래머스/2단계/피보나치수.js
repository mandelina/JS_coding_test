function solution(n) {
  let f0 = 0;
  let f1 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = (f0 + f1) % 1234567; // 나머지들만 계산
    f0 = f1;
    f1 = temp;
  }
  return f1; // 마지막에 temp값을 f1에 넣어 주었음으로
}
