// 17,19,20걸림
function solution(n, words) {
  //사람수 , 사람들이 순서대로 말한 단어
  //가장 먼저 탈락하는 사람의 번호 ,  그 사람이 자신의 몇 번째 차례에 탈락하는지
  // 탈락자가 생기지 않는다면, [0, 0]

  let answer = [0, 0];

  // 1.문자가 다른경우
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].slice(-1) !== words[i + 1].slice(0, 1)) {
      answer[0] = (i + 1 + 1) % n === 0 ? n : (i + 1 + 1) % n;
      let order = (i + 1 + 1) / n;
      answer[1] = Number.isInteger(order) ? order : Math.floor(order) + 1;
      return answer;
    }
  }
  // 2. 단어 중복
  let j = 0;
  words.some(function (x) {
    if (words.indexOf(x) !== words.lastIndexOf(x)) {
      j = words.lastIndexOf(x) + 1;
    } else {
      j = 0;
    }
  });

  if (j !== 0) {
    answer[0] = j % n === 0 ? n : j % n;
    let order = j / n;
    answer[1] = Number.isInteger(order) ? order : Math.floor(order) + 1;
    return answer;
  }
  // 3. 탈락자가 없는경우
  else {
    return answer;
  }
}

console.log(solution(2, ["land", "dream", "mom", "mom", "ror"]));
//------------------------

//좋은 풀이

function solution(n, words) {
  var answer = [];
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    let pass =
      // ["mom"][0] === ["dream"][5-1]
      //  words.slice(0,3).includes(words[3]
      //("land","dream","mom") . includes("mom")
      words[i][0] === words[i - 1][words[i - 1].length - 1] &&
      !words.slice(0, i).includes(words[i]);
    if (i % n === 0) turn++;
    if (!pass) return [(i % n) + 1, turn];
  }
  return [0, 0];
}

//----------
function solution(n, words) {
  const answer = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const lastStr = answer[answer.length - 1].split("").splice(-1, 1)[0];
    const firstStr = words[i][0];

    if (lastStr !== firstStr) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    if (answer.indexOf(words[i]) > -1) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    answer.push(words[i]);
  }

  return [0, 0];
}
