function solution(fees, records) {
  var answer = [];

  const getNumberTime = (time) => {
    const arr = time.split(":");
    return Number.parseInt(arr[0]) * 60 + Number.parseInt(arr[1]);
  };

  const getParkTime = (start, end) => {
    return getNumberTime(end) - getNumberTime(start);
  };

  const getTotalFee = (time) => {
    // 기본 시간
    let cost = fees[1];
    time -= fees[0];

    // 추가 단위 시간
    if (time > 0) {
      cost += Math.ceil(time / fees[2]) * fees[3];
    }
    return cost;
  };

  const park = records
    .map((item) => item.split(" "))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])); // 자동차 번호가 같으면 시간 순서 ,아니면 차량순서대로 정렬
  console.log(park);

  let time = 0;
  for (let i = park.length - 1; i >= 0; i--) {
    if (park[i][2] === "IN") {
      // 나간 기록이 없는 차량
      time += getParkTime(park[i][0], "23:59");
    } else {
      // 나간 기록이 있는 차량
      time += getParkTime(park[i - 1][0], park[i][0]);
      i--;
    }

    // 차량 종류가 바뀌면 answer 맨 앞에 주차 요금 추가
    if (i === 0 || park[i][1] !== park[i - 1][1]) {
      answer.unshift(getTotalFee(time));
      time = 0;
    }
  }
  return answer;
}

//다른풀이 ------------------------------------------------------------------------------

function solution(fees, records) {
  const parkingTime = {}; //{차번호: 시간}으로 저장할 예정
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0; //차량번호가 저장되지 않았을 경우

    //IN 이면 + (24시간(분) - 입차시간)
    //OUT이면 -(1439 - 출차시간)
    if (type === "IN") parkingTime[id] += 1439 - time; //1439는 24 * 60 - 1
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });

  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]; //기본요금 fee[1] + ( 주차시간 - 기본시간fee[0] ) / fee[2] * fee[3]
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]); // 차량번호 오름차순으로 청구요금 담아 배열로 리턴
}

//주요코드

// 1. 입출차기록을 정렬할때 메서드체이닝을 사용하여 정렬
const park = records
  .map((item) => item.split(" "))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

//2. 객체를 순회하는방법
for (let [car, time] of Object.entries(parkingTime)) {
  if (time <= fees[0]) time = fees[1];
  else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]; //기본요금 fee[1] + ( 주차시간 - 기본시간fee[0] ) / fee[2] * fee[3]
  answer.push([car, time]);
}
