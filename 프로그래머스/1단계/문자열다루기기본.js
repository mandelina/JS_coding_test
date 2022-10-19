function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  } else if (!/^[0-9]+$/.test(s)) {
    return false;
  }

  return true;
}

// 다른풀이 - 정규표현식 이용
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
