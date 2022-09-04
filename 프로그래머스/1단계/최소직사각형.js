function solution(sizes) {
  //모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기
  for (let i of sizes) {
    if (i[0] < i[1]) {
      [i[0], i[1]] = [i[1], i[0]]; // 정렬하기
    }
  }
  const w = Math.max(...sizes.map((i) => i[0]));
  const h = Math.max(...sizes.map((i) => i[1]));
  return w * h;
}

let sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];
console.log(solution(sizes));
