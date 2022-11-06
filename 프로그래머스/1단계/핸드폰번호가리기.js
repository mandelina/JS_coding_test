function solution(phone_number) {
  let str = "*";
  return str.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
