function solution(numbers) {
  let answer = [];
  let num_arr = numbers.split("");

  //숫자를 받고 소수인지 아닌지 판별하는 함수
  function isPrime(num) {
    if (num === 1 || num === 0) return false;
    let i = 2;
    while (num > i) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  }

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  for (let i = 1; i <= num_arr.length; i++) {
    let result = getPermutations(num_arr, i);
    result.forEach((num) => {
      if (isPrime(parseInt(num.join("")))) answer.push(parseInt(num.join("")));
    });
  }

  // 중복제거
  const set = new Set(answer);
  answer = [...set];
  return answer.length;
}

//다른분 코드2 : DFS

function 소수찾기(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num !== i && num % i === 0) {
      return false;
    }
  }

  return true;
}

function 소수찾기(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num !== i && num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(numbers) {
  const answer = [];
  const arr = numbers.split("");
  const makeStrChangeNumArr = new Set();
  const ch = new Array(arr.length).fill(0);

  function DFS(L, word) {
    if (L === arr.length) {
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;

          const newWord = word + arr[i];
          makeStrChangeNumArr.add(parseInt(newWord));

          DFS(L + 1, newWord);

          ch[i] = 0;
        }
      }
    }
  }

  DFS(0, "");

  for (let num of makeStrChangeNumArr) {
    if (소수찾기(num)) {
      answer.push(num);
    }
  }

  return answer.length;
}

console.log(solution("011"));
