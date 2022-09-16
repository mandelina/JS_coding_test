//오름차순정렬X내림차순 정렬을 한 값이 최소

//1번 - 효율성test 탈락
function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b); //오름차순
  B = B.sort((a, b) => b - a); //내림차순
  console.log(A, B);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

//2번 효율성test 통과
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((t, n, i) => t + n * B[i], 0); // t:누적값 , n :현재값 , i :인덱스, 0 :  초기값
}
