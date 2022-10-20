function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (shiftString(s, i)) {
      answer++;
    }
  }

  // 문자열과 회전수를 매개변수로 받아 올바른 괄호인지 boolean 값으로 리턴해주는 함수
  function shiftString(s, num) {
    s = s.split("");
    for (let i = 0; i < num; i++) {
      tmp = s.shift();
      s.push(tmp);
    }

    let stack = [];
    const pair = { "}": "{", "]": "[", ")": "(" }; // 각 괄호의 짝을 선언

    for (let i = 0; i < s.length; i++) {
      if (s[0] === "]" || s[0] === "}" || s[0] === ")") return false; // 맨 처음부터 닫는 괄호 나오면 false 리턴

      if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
        stack.push(s[i]);
      } else {
        if (stack[stack.length - 1] !== pair[s[i]]) return false; // stack에 들어간 열린괄호값과 s[i]값의 괄호 짝이 같지 않을경우 (즉 둘이 짝이 아닐경우) false 리턴
        stack.pop(); // 위에 코드가 아니라면 짝이 맞는것이므로 pop해주기
      }
    }
    return stack.length === 0 ? true : false;
  }
  return answer;
}

//다른 풀이 - 같은 로직인데 더 깔끔
const pair = { "}": "{", "]": "[", ")": "(" };

function solution(s) {
  const arr = s.split("");
  let result = 0;
  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (pair[c] === undefined) stack.push(c);
      else {
        if (stack[stack.length - 1] !== pair[c]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }

  return result;
}
