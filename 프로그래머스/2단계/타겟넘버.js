function solution(numbers, target) {
  let answer = 0;
  let len = numbers.length;

  function DFS(L, sum) {
    //level , sum
    // console.log("L,sum: ",L,sum)
    if (L === len) {
      // 깊이가 마지막 레벨까지 순회했다면
      if (target === sum) {
        // sum값과 target같이 같으면 answer에 1추가
        answer += 1;
      }
    } else {
      DFS(L + 1, sum + numbers[L]); // DFS로 순회할때 그 수를 더한경우
      console.log("L+1,sum-", L + 1, sum - numbers[L]);
      DFS(L + 1, sum - numbers[L]); // DFS로 순회할때 그 수를 뺀경우
      console.log("L+1,sum+", L + 1, sum + numbers[L]);
    }
  }
  DFS(0, 0); // 처음 시작
  return answer;
}
