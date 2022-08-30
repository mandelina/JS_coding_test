function solution(n, lost, reserve) {
  // 전체학생수 , 도난당한 학생들 번호배열, 여벌의 체육복을 가진 학생
  var answer = n - lost.length; // 전체 학생수- 도난당한 학생수

  let newLost = [...lost];
  let newReserve = [...reserve];
  newLost.sort((a, b) => a - b);
  newReserve.sort((a, b) => a - b);
  console.log(newReserve);

  for (const el of newLost) {
    if (newReserve.includes(el)) {
      newReserve = newReserve.filter((elm) => elm !== el);
      newLost = newLost.filter((elm) => elm !== el);
      answer++;
    }
  }

  //빌려줄수 있는 인원 추가
  for (const el of newLost) {
    if (newReserve.includes(el - 1)) {
      newReserve = newReserve.filter((elm) => elm !== el - 1);
      console.log("newReserve", newReserve);
      answer++;
    } else if (newReserve.includes(el + 1)) {
      newReserve = newReserve.filter((elm) => elm !== el + 1);
      console.log("newReserve", newReserve);
      answer++;
    }
  }
  return answer;
}

const n = 4;
const lost = [2, 3];
const reserve = [3, 4];

solution(n, lost, reserve);
