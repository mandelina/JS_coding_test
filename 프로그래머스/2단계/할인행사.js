// 할인 목록을 순회하며 want의 이름과 같으면 number을 -1
// 10번돌았을때 배열이 모두 0 이면 정답

//method1
// 할인 목록을 순회하며 want의 이름과 같으면 number을 -1
// 10번돌았을때 배열이 모두 0 이면 정답
function solution(want, number, discount) {
  let answer = 0;
  let copyNum = [...number];
  let endNum = discount.length - 10;

  for (let i = 0; i < endNum + 1; i++) {
    for (let j = i; j < i + 10; j++) {
      let isExist = want.indexOf(discount[j]);
      if (isExist !== -1) {
        copyNum[isExist] -= 1;
      }
    }

    let answerArr = Array.from({ length: number.length }, () => 0); // !중요 : 처음엔 [0,0,0,0,0] 이 배열과 비교하였는데 이경우 살 물건이 5종류일때만  정답으로 나옴
    if (JSON.stringify(copyNum) === JSON.stringify(answerArr)) {
      answer++;
    }

    copyNum = [...number];
  }
  return answer;
}

//method2
function solution(want, number, discount) {
  var answer = 0;
  let startIndex = 0;
  let wishlist = [];

  // 1 . 먼저 내가 사야할 list를 배열로 만듬
  for (let j = 0; j < want.length; j++) {
    for (let i = 0; i < number[j]; i++) {
      wishlist.push(want[j]);
    }
  }

  while (startIndex !== discount.length - 9) {
    let newArr = [...wishlist];

    for (let i = startIndex; i < startIndex + 10; i++) {
      if (newArr.includes(discount[i])) {
        newArr.splice(newArr.indexOf(discount[i]), 1); // 2. 만약 사야할 목록이 세일중이면 그 값을 wishlist배열에서 제거
      }
    }

    if (newArr.length === 0) {
      // 3. 다 제거후 아무것도 남아있지 않으면 원하는 물건을 다 살 수 있으므로 정답  추가
      answer++;
    }
    startIndex++;
  }
  return answer;
}
