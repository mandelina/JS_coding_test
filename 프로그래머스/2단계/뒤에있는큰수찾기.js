// sol-1
// 4개의 case가 시간제한에 걸림

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let j = i + 1;
    while (numbers[i] >= numbers[j]) {
      j++;
    }
    answer.push(numbers[j] ? numbers[j] : -1);
  }
  answer.push(-1);
  return answer;
}

//sol-2
// stack을 이용하는 문제
function solution(numbers) {
  const stack = [];
  const ret = new Array(numbers.length);

  for (let i = 0; i < numbers.length; i++) {
    // 숫자가 내려갈땐 i값을 계속 push하다가
    if (stack.length === 0 || numbers[i] < numbers[i - 1]) {
      stack.push(i);
      console.log(stack);
    } else {
      // numbers[i-1]값보다 numbers[i]값이 더 클경우 (가까운 큰수가 나온경우)
      while (
        stack.length !== 0 &&
        numbers[stack[stack.length - 1]] < numbers[i] // stack의 마지막 값이 number의 index
      ) {
        ret[stack.pop()] = numbers[i]; // 가까운 큰 수를 ret 배열에 넣어준다.
      }
      stack.push(i); // 다음 비교 (i와 i+1) 를 위해 i 값을 넣어줌
    }
  }

  // // 나머지는 -1
  while (stack.length !== 0) {
    // console.log(stack)
    ret[stack.pop()] = -1;
  }

  return ret;
}
