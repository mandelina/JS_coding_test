function solution(arr) {
  var answer = [];
  if (arr.length === 1) return [-1];

  arr.filter((el) => {
    if (el !== Math.min(...arr)) {
      answer.push(el);
    }
  });
  return answer;
}
