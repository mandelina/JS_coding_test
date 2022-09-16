function solution(s) {
  const removeZero = (s) => {
    const removed = s
      .split("")
      .filter((n) => n !== "0")
      .join(""); //0없애고 join
    return { removed, count: s.length - removed.length }; // 0없애 문자열 ,0을 없앤 개수
  };

  const convertToBinary = (s, turnCount, removedCount) => {
    if (s === "1") return [turnCount, removedCount];
    const { removed, count } = removeZero(s);
    // toString(2) - 진수변환
    return convertToBinary(
      removed.length.toString(2),
      turnCount + 1,
      removedCount + count
    );
  };

  return convertToBinary(s, 0, 0);
}

console.log("1");
