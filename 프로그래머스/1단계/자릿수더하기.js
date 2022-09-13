function solution(n) {
  let answer = 0;
  num = n.toString();
  num_arr = num.split(""); // 각 숫자자리들을 배열에 넣고
  num_arr.forEach((i) => (answer = answer + Number(i))); //더하기
  return answer;
}

//다른사람풀이

function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
