function solution(nums) {
  //가장 많은 종류의 폰켓몬을 선택하는 방법
  // 그때의 폰켓몬 종류 번호의 개수를 return

  let answer = 0;
  let pickLength = nums.length / 2;

  let set = new Set(nums);
  let newArr = [...set];

  let a = new Array(...new Set(nums));
  console.log(a);

  //축약코드1
  // newArr = [...new Set(nums)]

  if (newArr.length === pickLength) {
    answer = newArr.length;
  } else {
    answer = newArr.length > pickLength ? pickLength : newArr.length;
  }
  //축약코드2
  // answer= newArr.length >= pickLength ? pickLength : newArr.length
  console.log(answer);
  return answer;
}

let nums = [3, 1, 2, 3];
solution(nums);
