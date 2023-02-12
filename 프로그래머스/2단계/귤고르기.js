// method 1
// 2개시간초과

function solution(k, tangerine) {
  let answer = 0;
  let frequency = [];
  let sum = 0;
  // 배열 중복 없애기
  const set = new Set(tangerine);
  const tangerSortArr = [...set];

  // 빈도값 계산
  tangerSortArr.forEach((i) => {
    frequency.push(tangerine.filter((el) => el === i).length);
  });

  frequency.sort((a, b) => b - a);

  for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] > k) {
      return 1;
    }
    sum += frequency[i];
    answer++;
    if (sum >= k) {
      return answer;
    }
  }
}

//method2
function solution(k, tangerine) {
  // 1) 귤의 크기별 개수를 담을 map 생성한다.
  const kind = new Map();
  let answer = 0;

  // 2) 크기별 개수를 구한다.
  // set : 맵에 key-value 쌍을 집어넣음
  // has : 값이 존재하면 true 반환
  // get : key값에 맞는  value값 반환

  tangerine.forEach((org) => {
    kind.set(org, kind.has(org) ? kind.get(org) + 1 : 1);
  });
  console.log(kind);

  // 3) 귤의 개수에 따른 내림차순 정렬
  const sortArr = [...kind].sort((a, b) => b[1] - a[1]);

  // 4) BOX에 담는다.
  sortArr.forEach((arr) => {
    // 5) 담을 개수(k)가 0보다 클 때만 BOX에 담는다.
    if (k > 0) {
      // 6)  담을 개수 - 귤의 개수
      k -= arr[1];

      // 7) 담게 되면 Box에 새로운 크기의 귤이 들어 오므로 1증가
      answer++;
    }
  });
  // 8) 귤의 크기별 종류를 return한다.
  return answer;
}
