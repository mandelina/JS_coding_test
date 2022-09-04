// 내코드
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}

// 다른사람 풀이
function solution1(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

let arr = [1, 1, 3, 3, 0, 1, 1];
solution(arr);
solution1(arr);
