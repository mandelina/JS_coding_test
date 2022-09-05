function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k]; // 모든 3개의 숫자 합을 구해보고
        if (isPrime(sum)) answer += 1; // isPrime함수로 판별
      }
    }
  }

  return answer;
}

//소수 여부 판정 함수
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

let nums = [1, 2, 3, 4];
console.log(solution(nums));
