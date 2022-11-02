// 내풀이
function solution(land) {
  let answer = 0;
  let idx = -1;
  let max = Number.MAX_VALUE;

  for (let i = 1; i <= land.length; i++) {
    max = Math.max(...land[i - 1]);
    idx = land[i - 1].indexOf(max);

    if (i !== land.length) {
      land[i][idx] = 0;
    }

    answer += Math.max(...land[i - 1]);
  }
  return answer;
}

//정답
function solution(land) {
  let answer = [];
  let len = land.length;
  for (let i = 1; i < len; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  answer = land[land.length - 1];

  return Math.max(...answer);
}
