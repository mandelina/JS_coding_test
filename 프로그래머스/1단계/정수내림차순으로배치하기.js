function solution(n) {
  let str = n.toString();
  return parseInt(
    str
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
