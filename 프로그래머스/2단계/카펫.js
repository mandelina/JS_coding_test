function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;
  for (let height = 3; height < brown / 2; height++) {
    // 높이는  최소 3이기 때문에 3부터 시작

    if (sum % height === 0) {
      // 가로길이
      let weight = sum / height;
      if ((height - 2) * (weight - 2) === yellow) {
        //테두리를 제외한 길이를 구해야하기 때문에 각각 -2
        //height값과 weigth값을 넣고 계산했을때 yellow갯수와 일치하면 답이므로 return
        return [weight, height];
      }
    }
  }
  return answer;
}
