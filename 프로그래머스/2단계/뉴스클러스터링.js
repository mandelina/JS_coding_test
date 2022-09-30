function solution(str1, str2) {
  let answer = 0;
  let set1 = [];
  let set2 = [];
  let regExp = /[0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;

  //특수문자,공백,숫자제거
  str1 = str1.replace(regExp, "").toUpperCase();
  str2 = str2.replace(regExp, "").toUpperCase();

  for (let i = 0; i < str1.length - 1; i++) {
    set1.push(str1[i] + str1[i + 1]);
    set2.push(str2[i] + str2[i + 1]);
  }

  let intersection = set1.filter((x) => set2.includes(x));
  const tmp_set = new Set(intersection);
  intersection = [...tmp_set];
  const union = set1.length + set2.length - intersection.length;

  answer = Math.ceil((intersection.length / union) * 65536);
  return answer;
}

str1 = "aa1+aa2";
str2 = "AAAA12";
console.log(solution(str1, str2));
