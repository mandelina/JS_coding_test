function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let visited = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let count = 1;
  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(L) {
    for (let i = 1; i <= n; i++) {
      //graph[1][1]~graph[1][n]까지
      //visited[1]~visited[n] 까지

      if (visited[i] === 0 && graph[L][i] === 1) {
        visited[L] = 1;
        count++;
        DFS(i);
        visited[L] = 0;
      }
    }
  }

  for (let [a, b] of wires) {
    graph[a][b] = 0;
    graph[b][a] = 0;
    count = 1;
    DFS(1); // 1부터 타고간다.
    graph[a][b] = 1;
    graph[b][a] = 1;
    answer = Math.min(answer, Math.abs(n - count - count));
    // n-count : 끊어낸 노드 개수
    // 끊어낸 노드 개수- count : 둘의 차이의 절댓값
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );
