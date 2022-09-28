function solution(msg) {
  let answer = [];
  let dictionary = [""];
  for (let i = 65; i < 91; i++) {
    // 1 사전 초기화
    dictionary.push(String.fromCharCode(i));
  }

  for (let i = 0, j, len = msg.length; i < len; i = j) {
    let w = msg[i];
    for (j = i + 1; j < len; j++) {
      // 2 현재 입력 중 사전에 등재되어 있는 가장 긴 문자열 w 찾기
      let c = msg[j];
      console.log(c);
      // 연속된 문자열이 포함되어있지 않음
      if (!dictionary.includes(w + c)) {
        dictionary.push(w + c); // 4 w + c 사전에 등록
        break;
      }
      // 연속된 문자열이 포함되어있으면
      w += msg[j];
    }
    answer.push(dictionary.indexOf(w)); // 3 w의 사전 색인 번호 출력
  }
  return answer;
}
