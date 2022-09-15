// 내풀이
function solution(s) {
  let answer = [];
  let nums_arr = [];
  nums = s.split(" ");
  nums.forEach((num) => {
    nums_arr.push(Number(num));
  });
  answer += Math.min(...nums_arr).toString();
  answer += " ";
  answer += Math.max(...nums_arr).toString();

  return answer;
}

// 다른풀이

function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr); // min,max는 문자열에서도 가능
}
