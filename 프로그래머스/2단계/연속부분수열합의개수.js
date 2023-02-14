//슬라이딩 윈도우 알고리즘
//구간의 넓이가 고정되어 있을 경우 구간 합을 구하는 효율적인 방법
// for문을 이용하는것 보다 훨씬 효율적.

function solution(elements) {
  let set = new Set();
  const ELE_LEN = elements.length;
  for (let i = 1; i <= ELE_LEN; i++) {
    //  i : 한 뭉텅이 당 수열의 갯수 (1개~ 모든수 묶어서 합하기)
    let sum = 0;
    for (let j = 0; j < ELE_LEN; j++) {
      // j : 뭉텅의 갯수
      if (j === 0) {
        // 처음에는 한 뭉텅이(합) 계산을 해준다.
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      } else {
        // 다음 뭉텅이(합)으로 넘어가는 계산
        sum -= elements[j - 1]; // 이전 숫자를 빼고
        sum += elements[(j + i - 1) % ELE_LEN]; // 다음숫자를 더한다.
      }
      set.add(sum);
    }
  }
  return set.size;
}
