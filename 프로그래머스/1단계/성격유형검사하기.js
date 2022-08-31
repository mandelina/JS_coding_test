function solution(survey, choices) {
  //문자열 배열 (비동의/동의), 선택지 정수 배열
  MBTI = {};
  types = ["RT", "CF", "JM", "AN"];

  // 점수 매길 배열만들기

  types.forEach((i) => i.split("").forEach((j) => (MBTI[j] = 0)));

  choices.forEach((i, index) => {
    const [disagree, agree] = survey[index];
    MBTI[i > 4 ? agree : disagree] += Math.abs(i - 4); // 이렇게 점수를 처리해주는 방법!! 좋은방법 같음
  });

  console.log(MBTI);
  console.log(types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join(""));
  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join(""); // a,b 순서를 바꾸면 안된다. (동점일 경우 오류가 남)
}

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];
solution(survey, choices);
