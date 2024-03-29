function solution(tickets) {
  const routes = []; //최종 가능 루트들을 담을 배열
  const makeRoutes = (currentDepart, remainTickets, currentRoute) => {
    //현재 출발지, 남은 티켓들, 현재 까지 만든 루트를 기반으로 경로를 만들어 가는 재귀 함수
    if (remainTickets.length > 0) {
      remainTickets.forEach(([depart, nextDepart], index) => {
        if (depart === currentDepart)
          //현재 출발지와 같은 출발지를 가진 티켓이 있다면, 해당 티켓을 사용하고 해당 티켓의 도착지를 다음 출발지로 지정
          makeRoutes(
            nextDepart,
            [
              ...remainTickets.slice(0, index),
              ...remainTickets.slice(index + 1),
            ],
            [...currentRoute, currentDepart]
          );
      });
    } else {
      //티켓을 모두 사용하면 최종 가능 루트에 포함
      console.log(currentDepart);
      routes.push([...currentRoute, currentDepart]);
    }
  };
  makeRoutes("ICN", tickets, []);
  return routes.sort()[0];
}

//풀이 2
function solution(tickets) {
  var answer = [];
  DFS(tickets, "ICN", ["ICN"]);
  // console.log(answer.sort());
  return answer.sort()[0];
  function DFS(t, start, str) {
    // console.log("DFS t,start,str : ["+t+"],["+start+"],["+str+"]")
    if (t.length == 0) {
      // console.log(str+"\n");
      answer.push(str);
    }
    for (var i in t) {
      if (t[i][0] == start) {
        let tmp = t.slice();
        tmp.splice(i, 1);
        let tmp2 = str.slice();
        tmp2.push(t[i][1]);
        DFS(tmp, t[i][1], tmp2);
      }
    }
  }
}
