//내풀이
function solution(s) {
  let answer = "";
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    tmp.push(s.charCodeAt(i));
  }
  tmp.sort((a, b) => b - a);
  console.log(tmp);
  for (let i = 0; i < s.length; i++) {
    answer += String.fromCharCode(tmp[i]);
  }
  return answer;
}

//다른풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}
