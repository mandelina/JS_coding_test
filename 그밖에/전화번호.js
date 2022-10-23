function solution(phone_number) {
  let phone_req1 = /^010-([0-9]{4})-([0-9]{4})$/;
  let phone_req2 = /^010([0-9]{4})([0-9]{4})$/;
  let phone_req3 = /^\+82-10-([0-9]{4})-([0-9]{4})$/;

  if (phone_req1.test(phone_number)) {
    return 1;
  } else if (phone_req2.test(phone_number)) {
    return 2;
  } else if (phone_req3.test(phone_number)) {
    return 3;
  } else {
    return -1;
  }
}
