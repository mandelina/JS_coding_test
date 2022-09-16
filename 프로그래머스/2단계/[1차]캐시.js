function solution(cacheSize, cities) {
  let time = 0;
  let arr = [];
  const HIT = 1;
  const MISS = 5;

  cities.forEach((city) => {
    city = city.toLowerCase();

    if (arr.includes(city)) {
      time += HIT;
      arr = arr.filter((el) => el !== city); //city 삭제
      arr.unshift(city); //맨앞으로
      arr = arr.slice(0, cacheSize); // cacheSize만큼 자르기
    } else {
      time += MISS;
      arr.unshift(city); // 맨앞으로
      arr = arr.slice(0, cacheSize); // cacheSize만큼 자르기
    }
  });
  return time;
}
