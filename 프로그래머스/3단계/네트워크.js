function solution(n, computers) {
  let answer = 0;
  const check_array = Array.from({ length: n }, () => 0); // 체크배열

  for (let i = 0; i < n; i++) {
    // n번만큼 순회를 하자
    if (check_array[i] === 0) {
      DFS(i);
      answer++;
      console.log("i: ", i);
    }
  }

  function DFS(i) {
    check_array[i] = 1; //체크해놓기
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && check_array[j] === 0 && i !== j) {
        console.log("j: ", j);
        DFS(j);
      }
    }
  }
  return answer;
}
