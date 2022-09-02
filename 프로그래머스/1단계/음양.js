function solution(absolutes, signs) {
  // 절대값 배열 , 부호
  let answer = 0;
  for (i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

console.log("answer : ", solution(absolutes, signs));
