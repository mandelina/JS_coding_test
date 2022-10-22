// 내가 푼 풀이 - 68점

function solution(k, dungeons) {
  //현재 피로도 , [최소,소모] 피로도
  let answer = 0;
  for (let i = 0; i < dungeons.length; i++) {
    // 현재 피로도와 최소 피로도가 같은거 먼저 써주기
    dungeons.sort((a, b) => b[0] - a[0]); // 최소 피로도가 큰 순
    for (let j = 0; j < dungeons.length; j++) {
      if (k === dungeons[i][0]) {
        answer++;
        k -= dungeons[i][1];
        dungeons.shift();
      }
    }

    dungeons.sort((a, b) => a[1] - b[1]); // 소모값이 작은순

    dungeons.sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0];
      } else {
        return a[1] - b[1];
      }
    });

    if (k >= dungeons[i][0]) {
      answer++;
      k -= dungeons[i][1];
    }
  }
  return answer;
}

// 100점 답안 DFS
function solution(k, dungeons) {
  let max = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    max = max < count ? count : max;

    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue;

      let curDungeon = dungeons[i];

      if (curDungeon[0] <= k) {
        visited[i] = true;
        dfs(count + 1, k - curDungeon[1]);
        visited[i] = false;
      }
    }
  }
  dfs(0, k);
  return max;
}
