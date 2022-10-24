function solution(clothes) {
  var answer = 1;
  var clothes_obj = {}; // 옷을 객체로 저장

  //   obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(옷의 개수)을 더해줌.
  // obj에 해당 키가 있으면 해당 키의 값을 불러오고 1을 더해줌.
  for (var i = 0; i < clothes.length; i++) {
    clothes_obj[clothes[i][1]] = (clothes_obj[clothes[i][1]] || 1) + 1;
  }
  console.log(clothes_obj);
  for (var key in clothes_obj) {
    answer *= clothes_obj[key];
  }

  // -1의 이유는 최소한 1가지 이상의 옷을 입기 떄문에 옷을 입지 않은 경우 제외.
  return answer - 1;
}
