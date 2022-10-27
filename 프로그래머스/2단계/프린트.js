function solution(priorities, location) {
  var answer = 0;
  let documents = priorities.map((priority, documentLocation) => [
    documentLocation,
    priority,
  ]);
  let locationPrinted = false;
  while (!locationPrinted) {
    const shifted = documents.shift();
    let printAvailable = true;
    for (let i = 0; i < documents.length; i++) {
      if (shifted[1] < documents[i][1]) {
        printAvailable = false;
        break;
      }
    }
    if (printAvailable) {
      answer += 1;
      if (shifted[0] === location) locationPrinted = true;
    } else {
      documents.push(shifted);
    }
  }
  return answer;
}
