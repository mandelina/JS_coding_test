function solution(a, b) {
  var answer = 0;
  for (i = 0; i < a.length; i++) {
    let tmp = a[i] * b[i];
    answer += tmp;
  }
  return answer;
}

//다른풀이

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0); // (누적되는값,현재값,인덱스)
}
