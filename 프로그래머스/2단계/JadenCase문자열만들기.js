function solution(s) {
  let answer = [];
  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    answer.push(
      s[i].substring(0, 1).toUpperCase() + s[i].substring(1).toLowerCase() // 배열에 단어씩 넣어놓고
    );
  }
  return answer.join(" "); // join으로 묶음
}

// ------------다른풀이
function solution(s) {
  s = s
    .split(" ") // 띄어쓰기를 기준으로 나눕니다.
    .map(
      (el) =>
        el
          .split("") //나눈 덩어리를 다시 요소 하나 하나씩 나눠줍니다
          .map(
            (el, index) => (index == 0 ? el.toUpperCase() : el.toLowerCase()) // 덩어리의 요소가 첫번째이면 대문자, 그렇지 않으면 소문자로 변환 해줍니다.
          )
          .join("") // 작은 배열들을 합쳐줍니다.
    )
    .join(" "); //큰 배열들을 합쳐줍니다
  return s;
}
